import React from 'react';
import { Check, Crown, Zap, Users } from 'lucide-react';

const PricingPage = () => {
  const features = {
    free: [
      "Create unlimited personal lists",
      "Basic categorization",
      "Access to movie and TV show database",
      "Basic search functionality",
      "Mobile and web access",
      "Up to 3 shared lists"
    ],
    pro: [
      "All Free features",
      "Advanced AI recommendations",
      "Unlimited shared lists",
      "Priority support",
      "Advanced search and filters",
      "Custom categories",
      "Offline access",
      "List analytics and insights"
    ],
    teams: [
      "All Pro features",
      "Team workspace",
      "Advanced collaboration tools",
      "Admin controls",
      "Team analytics",
      "Priority support",
      "Custom integrations",
      "Dedicated account manager"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Animated Header */}
      <header className="container mx-auto px-4 py-16 text-center opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
        <h1 className="text-4xl font-bold">Choose Your Plan</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          Find the perfect plan for your organizing needs
        </p>
      </header>

      {/* Pricing Cards with Staggered Animation */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Tier */}
          <div className="opacity-0 animate-[slideInUp_0.6s_ease-out_0.2s_forwards]">
            <div className="group h-full rounded-lg bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Free</h2>
                <p className="mt-2 text-slate-400">Get started with the basics</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-slate-400">/month</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {features.free.map((feature, index) => (
                  <li key={index} className="flex items-start opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <Check className="mr-2 h-5 w-5 text-emerald-500" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-slate-600 hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="opacity-0 animate-[slideInUp_0.6s_ease-out_0.3s_forwards]">
            <div className="group relative h-full rounded-lg bg-gradient-to-b from-purple-900 to-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="absolute -top-3 right-4 rounded-full bg-purple-600 px-3 py-1 text-sm font-semibold animate-[bounce_1s_ease-in-out_infinite]">
                Popular
              </div>
              <div className="mb-8">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold">Pro</h2>
                  <Crown className="ml-2 h-5 w-5 text-purple-400 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <p className="mt-2 text-slate-400">Perfect for power users</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-slate-400">/month</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {features.pro.map((feature, index) => (
                  <li key={index} className="flex items-start opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <Check className="mr-2 h-5 w-5 text-purple-400" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
                Upgrade to Pro
              </button>
            </div>
          </div>

          {/* Teams Tier */}
          <div className="opacity-0 animate-[slideInUp_0.6s_ease-out_0.4s_forwards]">
            <div className="group h-full rounded-lg bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-8">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold">Teams</h2>
                  <Users className="ml-2 h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <p className="mt-2 text-slate-400">For organizations and teams</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">$49.99</span>
                  <span className="text-slate-400">/month</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {features.teams.map((feature, index) => (
                  <li key={index} className="flex items-start opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    <Check className="mr-2 h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:scale-105">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Fade In */}
      <section className="container mx-auto mt-20 px-4 py-12 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
        <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              q: "Can I switch plans later?",
              a: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle."
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, PayPal, and Apple Pay."
            },
            {
              q: "Is there a free trial for Pro?",
              a: "Yes, you can try Pro features free for 14 days. No credit card required."
            },
            {
              q: "What's included in Teams plan?",
              a: "Teams includes everything in Pro, plus advanced collaboration tools, admin controls, and dedicated support."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="transform rounded-lg bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700"
            >
              <h3 className="text-lg font-semibold">{faq.q}</h3>
              <p className="mt-2 text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section with Slide Up */}
      <section className="bg-slate-800">
        <div className="container mx-auto px-4 py-16 text-center opacity-0 animate-[slideInUp_0.6s_ease-out_1s_forwards]">
          <h2 className="text-3xl font-bold">Start Organizing Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Try Rekkoo free and upgrade when you're ready
          </p>
          <button className="mt-8 rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
