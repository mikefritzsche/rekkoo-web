// src/components/Dashboard.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.getProfile();
        setProfile(response.profile);
      } catch (err) {
        setError('Failed to load profile data');
        console.error('Profile fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome, {profile?.display_name || user?.username}!
              </h1>
              <p className="text-gray-600 mt-1">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Actions Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Create New List
              </button>
              <button className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                View My Lists
              </button>
              <button className="w-full py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                Browse Shared Lists
              </button>
            </div>
          </div>

          {/* Stats/Overview Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800">Total Lists</h3>
                <p className="text-2xl font-bold text-blue-600">0</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="text-sm font-medium text-green-800">Completed Items</h3>
                <p className="text-2xl font-bold text-green-600">0</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="text-sm font-medium text-purple-800">Shared Lists</h3>
                <p className="text-2xl font-bold text-purple-600">0</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="text-sm font-medium text-yellow-800">Active Goals</h3>
                <p className="text-2xl font-bold text-yellow-600">0</p>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="text-gray-500 text-center py-8">
              No recent activity to display
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
