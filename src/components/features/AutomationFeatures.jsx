import React from 'react';
import {
  Zap, Calendar, Bell, RefreshCcw,
  Share2, Timer, Database, GitBranch
} from 'lucide-react';

const AutomationFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Automatically sync your tasks and events with your favorite calendar apps. Stay on top of deadlines and never miss an important date."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get intelligent reminders based on your location, time, and list priority. Our system learns when and how you prefer to be notified."
    },
    {
      icon: RefreshCcw,
      title: "Auto-Sync",
      description: "Your lists automatically sync across all devices. Changes are reflected instantly, whether you're on mobile, desktop, or web."
    },
    {
      icon: Share2,
      title: "Automated Sharing",
      description: "Set up automatic sharing rules for specific lists or items. Perfect for team projects and family shopping lists."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect with external services to automatically update movie ratings, book reviews, and restaurant information."
    },
    {
      icon: GitBranch,
      title: "Smart Workflows",
      description: "Create custom automation rules that trigger based on specific conditions or actions in your lists."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <Zap className="mx-auto h-16 w-16 text-emerald-400" />
            <h1 className="mt-6 text-4xl font-bold">Smart Automation</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Let Rekkoo handle the routine tasks while you focus on what matters
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
                <Icon className="h-8 w-8 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Automation Examples */}
      <section className="bg-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="opacity-0 animate-[slideInLeft_0.6s_ease-out_0.8s_forwards]">
              <h2 className="text-3xl font-bold">Automation in Action</h2>
              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-slate-700 p-6">
                  <Timer className="h-6 w-6 text-emerald-400" />
                  <h3 className="mt-2 text-xl font-bold">Time-Based Actions</h3>
                  <p className="mt-2 text-slate-300">
                    Schedule list updates, reminders, and notifications based on time and date.
                  </p>
                </div>
                <div className="rounded-lg bg-slate-700 p-6">
                  <GitBranch className="h-6 w-6 text-emerald-400" />
                  <h3 className="mt-2 text-xl font-bold">Conditional Workflows</h3>
                  <p className="mt-2 text-slate-300">
                    Create if-then rules to automate list management based on specific triggers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 opacity-0 animate-[slideInRight_0.6s_ease-out_0.8s_forwards]">
              <div className="rounded-lg bg-slate-700 p-6">
                <h3 className="font-semibold">Example Automations:</h3>
                <ul className="mt-4 space-y-4 text-slate-300">
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-emerald-400" />
                    <span>Automatically add new Netflix releases to your watch list</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-emerald-400" />
                    <span>Send grocery list reminders when near favorite stores</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="mr-2 h-5 w-5 text-emerald-400" />
                    <span>Update book status when finished reading on Kindle</span>
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
          <h2 className="text-3xl font-bold">Ready to Automate?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Start saving time with smart automation features
          </p>
          <button className="mt-8 rounded-lg bg-emerald-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-emerald-500 hover:scale-105">
            Get Started with Automation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AutomationFeatures;
