import React, { useState } from 'react';
import { Users, Share2, Trophy, MessageSquare, Heart, Globe, ArrowRight, Download } from 'lucide-react';

const SocialPage = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const socialFeatures = [
    {
      icon: Users,
      title: "Collaborative Lists",
      description: "Create and manage lists together with friends, family, or colleagues. Perfect for movie clubs, reading groups, and team projects."
    },
    {
      icon: Share2,
      title: "Share & Discover",
      description: "Share your curated lists publicly or privately. Find new recommendations from people with similar interests."
    },
    {
      icon: Trophy,
      title: "Group Challenges",
      description: "Join monthly challenges with friends. Complete movie marathons, reading challenges, or restaurant tours together."
    },
    {
      icon: MessageSquare,
      title: "Social Discussions",
      description: "Comment on list items, share reviews, and discuss recommendations with your network."
    },
    {
      icon: Heart,
      title: "Friend Activity",
      description: "See what your friends are watching, reading, and recommending in real-time through the activity feed."
    },
    {
      icon: Globe,
      title: "Community Trends",
      description: "Discover what's popular in your area or within your interest groups. Find trending movies, books, and places."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Animated Header */}
      <header className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
        <h1 className="text-4xl font-bold">Connect & Share</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Make organizing social with collaborative features and shared discoveries
        </p>
      </header>

      {/* Features Grid with Hover Effects */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {socialFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-lg bg-slate-800 p-8 transition-all duration-300 hover:scale-105 hover:bg-slate-700 hover:shadow-xl"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Icon className="h-8 w-8 text-purple-500 transition-transform duration-300 group-hover:-translate-y-1" />
                <h3 className="mt-4 text-xl font-bold transition-colors duration-300 group-hover:text-purple-400">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-300">{feature.description}</p>
                <ArrowRight className={`mt-4 h-5 w-5 transform text-purple-500 transition-all duration-300 ${
                  hoveredFeature === index ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                }`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Section with Staggered Animation */}
      <section className="bg-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-slate-700 p-8 opacity-0 animate-[slideInLeft_0.5s_ease-out_0.2s_forwards]">
              <h2 className="text-2xl font-bold">Community Features</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-purple-600/20 p-1">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Group Lists</h3>
                    <p className="text-slate-300">Create lists that multiple people can edit and manage together</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-purple-600/20 p-1">
                    <Share2 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Public Sharing</h3>
                    <p className="text-slate-300">Share your lists with the world or keep them private</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-purple-600/20 p-1">
                    <MessageSquare className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Comments & Reviews</h3>
                    <p className="text-slate-300">Engage in discussions about list items</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-slate-700 p-8 opacity-0 animate-[slideInRight_0.5s_ease-out_0.4s_forwards]">
              <h2 className="text-2xl font-bold">Privacy Controls</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-600/20 p-1">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Granular Permissions</h3>
                    <p className="text-slate-300">Control who can view and edit your lists</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-600/20 p-1">
                    <Share2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Private Lists</h3>
                    <p className="text-slate-300">Keep personal lists completely private</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 rounded-full bg-blue-600/20 p-1">
                    <Globe className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Activity Control</h3>
                    <p className="text-slate-300">Choose what appears in your activity feed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Ready to Connect?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Join thousands of users sharing and discovering together. Start organizing your interests with friends today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
              <button className="group inline-flex items-center rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500">
                <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                Download Now
              </button>
              <p className="text-sm text-slate-400">Free download • Premium features available</p>
            </div>
            <div className="mt-8 flex justify-center space-x-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">10k+</p>
                <p className="text-sm text-slate-400">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">50k+</p>
                <p className="text-sm text-slate-400">Shared Lists</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">100k+</p>
                <p className="text-sm text-slate-400">Recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialPage;
