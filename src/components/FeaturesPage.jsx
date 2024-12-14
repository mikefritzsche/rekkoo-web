import React from 'react';
import {
  Brain, Users, Zap, BarChart, Lock, Trophy,
  Calendar, Globe, Sparkles, Radio, MessageSquare,
  CheckCircle
} from 'lucide-react';

const FeaturesPage = () => {
  const featureCategories = [
    {
      title: "AI & Smart Features",
      icon: Brain,
      color: "blue",
      features: [
        "Natural language input for quick additions",
        "Smart categorization of items",
        "Personalized recommendations",
        "Auto-tagging and organization",
        "Content enrichment from databases",
        "Intelligent search across lists"
      ]
    },
    {
      title: "Social & Discovery",
      icon: Users,
      color: "purple",
      features: [
        "Collaborative list editing",
        "Friend recommendations",
        "Public list sharing",
        "Group activities and challenges",
        "Community curated collections",
        "Anonymous trending items"
      ]
    },
    {
      title: "Automation",
      icon: Zap,
      color: "emerald",
      features: [
        "Calendar integration",
        "Location-based reminders",
        "Streaming service sync",
        "Automatic progress tracking",
        "Smart notifications",
        "Cross-platform updates"
      ]
    },
    {
      title: "Insights & Analytics",
      icon: BarChart,
      color: "orange",
      features: [
        "Personal activity dashboard",
        "Progress visualization",
        "Trend analysis",
        "Completion statistics",
        "Time tracking",
        "Goal monitoring"
      ]
    }
  ];

  // Color mapping object for fixed Tailwind classes
  const colorMap = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    emerald: "text-emerald-500",
    orange: "text-orange-500"
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Animated Header */}
      <header className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h1 className="text-4xl font-bold">Features</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Discover all the powerful features that make Rekkoo the ultimate organization tool
        </p>
      </header>

      {/* Feature Categories with Staggered Animation */}
      <section className="container mx-auto px-4 py-12">
        {featureCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="mb-16 opacity-0 animate-[slideInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-8 flex items-center">
                <Icon className={`h-8 w-8 ${colorMap[category.color]} transition-transform duration-300 group-hover:scale-110`} />
                <h2 className="ml-4 text-2xl font-bold">{category.title}</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`group rounded-lg bg-slate-800 p-6 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards] 
                      transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700`}
                    style={{ animationDelay: `${0.4 + index * 0.1 + featureIndex * 0.05}s` }}
                  >
                    <CheckCircle className={`h-6 w-6 ${colorMap[category.color]} transition-transform duration-300 group-hover:scale-110`} />
                    <p className="mt-4 text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Feature Details with Slide Animations */}
      <section className="bg-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="opacity-0 animate-[slideInLeft_0.6s_ease-out_0.8s_forwards]">
              <div className="rounded-lg bg-slate-700 p-8 transition-all duration-300 hover:bg-slate-600">
                <h2 className="text-2xl font-bold">Powerful Integration</h2>
                <p className="mt-4 text-slate-300">
                  Connect with your favorite services and automate your workflow:
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "Calendar sync for time-sensitive items",
                    "Movie and TV show database integration",
                    "Book information and reviews",
                    "Restaurant ratings and updates"
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
                      style={{ animationDelay: `${1 + index * 0.1}s` }}
                    >
                      <CheckCircle className="mr-2 h-5 w-5 text-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="opacity-0 animate-[slideInRight_0.6s_ease-out_0.8s_forwards]">
              <div className="rounded-lg bg-slate-700 p-8 transition-all duration-300 hover:bg-slate-600">
                <h2 className="text-2xl font-bold">Privacy First</h2>
                <p className="mt-4 text-slate-300">
                  Your data, your control:
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "Granular privacy controls for shared lists",
                    "Secure cloud backup",
                    "Data export options",
                    "End-to-end encryption for sensitive lists"
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
                      style={{ animationDelay: `${1 + index * 0.1}s` }}
                    >
                      <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Fade In */}
      <section className="bg-gradient-to-r from-purple-900 to-slate-800">
        <div className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_1.4s_forwards]">
          <h2 className="text-3xl font-bold">Ready to Experience More?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Start organizing smarter with our powerful features
          </p>
          <button className="mt-8 rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            Try All Features
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
