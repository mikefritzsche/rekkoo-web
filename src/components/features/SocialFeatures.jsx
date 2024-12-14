import React from 'react';
import {
  Users, Share2, MessageSquare, Heart,
  Globe, Trophy, UserPlus, Link
} from 'lucide-react';

const SocialFeatures = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Friend Connections",
      description: "Connect with friends and see what they're watching, reading, and recommending. Build your network of shared interests."
    },
    {
      icon: Share2,
      title: "List Sharing",
      description: "Share your curated lists with friends or make them public. Perfect for sharing movie recommendations or planning group activities."
    },
    {
      icon: MessageSquare,
      title: "Social Discussion",
      description: "Comment on list items, share reviews, and engage in discussions about shared interests with your network."
    },
    {
      icon: Trophy,
      title: "Group Challenges",
      description: "Create and participate in challenges with friends. Perfect for book clubs, movie marathons, or trying new restaurants."
    },
    {
      icon: Heart,
      title: "Social Discovery",
      description: "Discover new content through friends' recommendations and popular items in your network."
    },
    {
      icon: Globe,
      title: "Community Trends",
      description: "See what's trending in your area or within your interest groups. Find popular movies, books, and places."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <Users className="mx-auto h-16 w-16 text-purple-400" />
            <h1 className="mt-6 text-4xl font-bold">Connect & Share</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Make organizing social with collaborative features and shared discoveries
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-lg bg-slate-800 p-8 opacity-0 animate-[slideInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <Icon className="h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Collaboration Features */}
      <section className="bg-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="opacity-0 animate-[slideInLeft_0.6s_ease-out_0.8s_forwards]">
              <h2 className="text-3xl font-bold">Better Together</h2>
              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-slate-700 p-6">
                  <Link className="h-6 w-6 text-purple-400" />
                  <h3 className="mt-2 text-xl font-bold">Collaborative Lists</h3>
                  <p className="mt-2 text-slate-300">
                    Work together on shared lists with real-time updates and comments.
                  </p>
                </div>
                <div className="rounded-lg bg-slate-700 p-6">
                  <Globe className="h-6 w-6 text-purple-400" />
                  <h3 className="mt-2 text-xl font-bold">Community Features</h3>
                  <p className="mt-2 text-slate-300">
                    Discover and follow curated lists from the community.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 opacity-0 animate-[slideInRight_0.6s_ease-out_0.8s_forwards]">
              <div className="rounded-lg bg-slate-700 p-6">
                <h3 className="font-semibold">Popular Use Cases:</h3>
                <ul className="mt-4 space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <Heart className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Create a movie watchlist with your friends</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Organize a book club reading list</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="mr-2 h-5 w-5 text-purple-400" />
                    <span>Plan group restaurant visits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
          <h2 className="text-3xl font-bold">Start Connecting Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Join the community and start sharing your lists
          </p>
          <button className="mt-8 rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            Try Social Features
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialFeatures;
