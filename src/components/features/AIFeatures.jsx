import React from 'react';
import { Brain, Sparkles, Search, Zap, MessageSquare, GitBranch } from 'lucide-react';

const AIFeatures = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Input",
      description: "Add items to your lists using everyday language. Simply type 'add The Dark Knight to my watch list' or 'add bread to shopping list' and let our AI handle the rest."
    },
    {
      icon: GitBranch,
      title: "Smart Categorization",
      description: "Our AI automatically categorizes your items and suggests the most appropriate lists. Never worry about organizing manually again."
    },
    {
      icon: Sparkles,
      title: "Personalized Recommendations",
      description: "Get intelligent suggestions based on your interests, viewing history, and list patterns. Discover new content that matches your taste."
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Find anything in your lists with natural language queries. Search across all your lists simultaneously with smart filtering."
    },
    {
      icon: Brain,
      title: "Auto-Tagging",
      description: "Items are automatically tagged with relevant categories, genres, and attributes for better organization and discovery."
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Set up intelligent rules and let our AI handle routine tasks. Automatically update lists based on your preferences and behavior."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <Brain className="mx-auto h-16 w-16 text-blue-400" />
            <h1 className="mt-6 text-4xl font-bold">AI-Powered Organization</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Experience the future of list management with our advanced AI features
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
                <Icon className="h-8 w-8 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-slate-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="opacity-0 animate-[slideInLeft_0.6s_ease-out_0.8s_forwards]">
              <h2 className="text-3xl font-bold">See AI in Action</h2>
              <p className="mt-4 text-slate-300">
                Watch how our AI transforms your simple inputs into organized, enriched list items:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">→</span>
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">"Add Inception to watch list"</span>
                    <br />
                    Automatically adds with genre, rating, cast, and streaming availability
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">→</span>
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">"Add milk to grocery list"</span>
                    <br />
                    Categories under dairy, suggests related items you frequently buy
                  </p>
                </li>
              </ul>
            </div>

            <div className="space-y-4 opacity-0 animate-[slideInRight_0.6s_ease-out_0.8s_forwards]">
              <div className="rounded-lg bg-slate-700 p-6">
                <h3 className="font-semibold">Natural Language Processing</h3>
                <p className="mt-2 text-slate-300">
                  Our AI understands context and intent, making it easy to add and organize items naturally.
                </p>
              </div>
              <div className="rounded-lg bg-slate-700 p-6">
                <h3 className="font-semibold">Smart Learning</h3>
                <p className="mt-2 text-slate-300">
                  The more you use Rekkoo, the better it gets at predicting your preferences and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
          <h2 className="text-3xl font-bold">Ready to Experience Smarter Lists?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Start organizing with the power of AI today
          </p>
          <button className="mt-8 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:scale-105">
            Try AI Features Now
          </button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AIFeatures;
