import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Smartphone,
  Users,
  ListChecks,
  Settings,
  Download,
  Globe
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: ListChecks,
      title: 'Dynamic List Management',
      description: 'Create, organize, and share lists for everything from your daily tasks to your long-term goals. Our intuitive interface makes it easy to stay on top of it all.',
    },
    {
      icon: Users,
      title: 'Social & Collaborative Features',
      description: 'Share your lists with friends and family, follow other users to get inspired, and collaborate on shared goals. Rekkoo makes it easy to connect and get things done together.',
    },
    {
      icon: Settings,
      title: 'Comprehensive Settings',
      description: 'Customize your experience with a wide range of settings. From appearance to privacy, you have full control over how the app works for you.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <Globe className="mx-auto h-16 w-16 text-purple-400" />
        <h1 className="text-4xl font-bold mt-4">A Seamless Experience on All Your Devices</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Whether you're on your phone, tablet, or desktop, Rekkoo is available wherever you are.
          Get the full experience on our native mobile apps or use our powerful web app.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            <Download className="mr-2 h-5 w-5" /> App Store
          </a>
          <a href="#" className="flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            <Download className="mr-2 h-5 w-5" /> Google Play
          </a>
          <NavLink to="/login" className="flex items-center rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-gray-500 hover:scale-105">
            <Smartphone className="mr-2 h-5 w-5" /> Web App
          </NavLink>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="rounded-lg bg-slate-800 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-slate-700">
                <Icon className="mx-auto h-16 w-16 text-purple-400" />
                <h2 className="mt-6 text-2xl font-bold">{feature.title}</h2>
                <p className="mt-4 text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-slate-800">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Download the Rekkoo app today and take control of your life.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            <Download className="mr-2 h-5 w-5" /> App Store
          </a>
          <a href="#" className="flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            <Download className="mr-2 h-5 w-5" /> Google Play
          </a>
        </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
