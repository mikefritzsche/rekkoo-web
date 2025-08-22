import React from 'react';
import {
  Brain, Heart, Zap, Users, Target,
  Shield, Globe, Sparkles
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Brain,
      title: "Smart by Design",
      description: "We believe organization tools should work as intelligently as you do."
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Every feature we build starts with our users' needs and feedback."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is yours. We prioritize security and privacy in everything we do."
    },
    {
      icon: Globe,
      title: "Better Together",
      description: "We're building a community of people who love to stay organized."
    }
  ];

  const stats = [
    { label: "Active Users", value: "Coming Soon" },
    { label: "Lists Created", value: "Coming Soon" },
    { label: "Items Tracked", value: "Coming Soon" },
    { label: "Happy Customers", value: "Coming Soon" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <h1 className="text-5xl font-bold">Our Story</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              We're on a mission to make personal organization beautiful,
              intelligent, and accessible to everyone.
            </p>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="opacity-0 animate-[slideInLeft_0.6s_ease-out_0.3s_forwards]">
            <h2 className="text-3xl font-bold">Why We Built Rekkoo</h2>
            <p className="mt-4 text-slate-300">
              We noticed that while people love making lists, existing tools weren't
              evolving with modern needs. We set out to create something different –
              a tool that combines the simplicity of traditional lists with the power
              of modern technology.
            </p>
            <p className="mt-4 text-slate-300">
              Rekkoo was born from the idea that staying organized should be both
              effortless and enjoyable. Our AI-powered features and social
              integration make it more than just a list app – it's your personal
              organization hub.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-[slideInRight_0.6s_ease-out_0.3s_forwards]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group rounded-lg bg-slate-800 p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold opacity-0 animate-[fadeIn_0.6s_ease-out_0.6s_forwards]">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group rounded-lg bg-slate-800 p-8 opacity-0 animate-[slideInUp_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <Icon className="h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-slate-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
          Our Journey
        </h2>
        <div className="relative mt-12">
          {[
            { year: "2022", title: "The Idea", description: "Rekkoo was conceived as a modern solution to personal organization." },
            { year: "2023", title: "Launch", description: "First version of Rekkoo launched with core features." },
            { year: "2024", title: "AI Integration", description: "Introduced smart features and AI-powered recommendations." },
            { year: "Today", title: "Growing Community", description: "Continuing to evolve with our growing user base." }
          ].map((item, index) => (
            <div
              key={index}
              className="relative mb-8 ml-4 opacity-0 animate-[slideInLeft_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${1.2 + index * 0.2}s` }}
            >
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-purple-600" />
              <div className="absolute -left-6 top-0 h-4 w-4 rounded-full bg-purple-600" />
              <div className="ml-6">
                <span className="text-sm font-bold text-purple-400">{item.year}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-slate-800">
        <div className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_1.8s_forwards]">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Be part of the future of personal organization
          </p>
          <button className="mt-8 rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
