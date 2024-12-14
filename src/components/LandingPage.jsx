import React from 'react';
import { Download, Brain, Users, Zap, ArrowRight, Check } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold opacity-0 animate-[slideInDown_0.6s_ease-out_0.5s_forwards]">
            Smart lists for everything you love
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
            Experience the next generation of personal organization. Powered by AI, enriched with social features, and designed to make your life beautifully organized.
          </p>
          <div className="mt-8 opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
            <a
              href="#"
              className="group inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
            >
              <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
              Download Now
            </a>
          </div>
        </div>
      </header>

      {/* Core Features Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {/* AI Features */}
          <div className="group rounded-lg bg-slate-800 p-8 opacity-0 animate-[slideInUp_0.6s_ease-out_0.8s_forwards] transition-all duration-300 hover:-translate-y-2 hover:bg-slate-700">
            <Brain className="h-12 w-12 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="mt-6 text-2xl font-bold">AI-Powered</h2>
            <p className="mt-4 text-slate-300">Smart categorization, natural language input, and personalized recommendations.</p>
            <a href="/features/ai" className="mt-4 inline-flex items-center text-blue-400 transition-colors duration-300 hover:text-blue-300">
              Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Features */}
          <div className="group rounded-lg bg-slate-800 p-8 opacity-0 animate-[slideInUp_0.6s_ease-out_1s_forwards] transition-all duration-300 hover:-translate-y-2 hover:bg-slate-700">
            <Users className="h-12 w-12 text-purple-500 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="mt-6 text-2xl font-bold">Social Discovery</h2>
            <p className="mt-4 text-slate-300">Share lists, collaborate with friends, and discover new recommendations.</p>
            <a href="/features/social" className="mt-4 inline-flex items-center text-purple-400 transition-colors duration-300 hover:text-purple-300">
              Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Automation Features */}
          <div className="group rounded-lg bg-slate-800 p-8 opacity-0 animate-[slideInUp_0.6s_ease-out_1.2s_forwards] transition-all duration-300 hover:-translate-y-2 hover:bg-slate-700">
            <Zap className="h-12 w-12 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
            <h2 className="mt-6 text-2xl font-bold">Smart Automation</h2>
            <p className="mt-4 text-slate-300">Seamless integrations, automatic tracking, and intelligent updates.</p>
            <a href="/features/automation" className="mt-4 inline-flex items-center text-emerald-400 transition-colors duration-300 hover:text-emerald-300">
              Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Preview Card */}
          <div className="w-72 rounded-3xl bg-slate-800 p-6 shadow-2xl opacity-0 animate-[slideInLeft_0.6s_ease-out_1.4s_forwards]">
            <div className="space-y-4">
              <div className="rounded-lg bg-blue-600 p-4 transition-transform duration-300 hover:scale-105">
                <h4 className="text-sm font-medium">Movies to Watch</h4>
                <p className="text-xs text-blue-100">AI-powered recommendations</p>
              </div>
              <div className="rounded-lg bg-purple-600 p-4 transition-transform duration-300 hover:scale-105">
                <h4 className="text-sm font-medium">Books</h4>
                <p className="text-xs text-purple-100">Share with book club</p>
              </div>
              <div className="rounded-lg bg-emerald-600 p-4 transition-transform duration-300 hover:scale-105">
                <h4 className="text-sm font-medium">Restaurants</h4>
                <p className="text-xs text-emerald-100">Auto-updated ratings</p>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex-1 md:max-w-lg opacity-0 animate-[slideInRight_0.6s_ease-out_1.4s_forwards]">
            <h2 className="text-3xl font-bold">Everything You Need</h2>
            <ul className="mt-6 space-y-4">
              {[
                "Smart lists that learn from your preferences",
                "Rich data integration for movies, books, and more",
                "Seamless sharing and collaboration"
              ].map((feature, index) => (
                <li key={index} className="flex items-start opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]" style={{ animationDelay: `${1.6 + index * 0.1}s` }}>
                  <div className="mr-4 rounded-full bg-blue-600/20 p-1">
                    <Check className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-slate-300">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_1.8s_forwards]">
          <h2 className="text-3xl font-bold">Start Organizing Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Join thousands of users revolutionizing their personal organization
          </p>
          <button className="mt-8 group inline-flex items-center rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
            Download on the App Store
          </button>
          <p className="mt-4 text-sm text-slate-400">Free download • Premium features available</p>
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
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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

export default LandingPage;
