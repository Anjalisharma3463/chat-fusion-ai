"use client"; 
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  BarChart3, 
  Search, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Brain,
  Globe,
  Lock, 
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Summaries",
      description: "Get instant intelligent summaries of long conversations. Our AI understands context and extracts key insights automatically."
    },
    {
      icon: BarChart3,
      title: "Beautiful Visualizations",
      description: "Transform chat data into stunning charts and graphs. Understand communication patterns at a glance."
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find any message instantly with semantic search. Search by meaning, not just keywords."
    },
    {
      icon: TrendingUp,
      title: "Sentiment Analysis",
      description: "Understand emotional trends in your conversations. Track mood changes over time."
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Lightning-fast analysis of millions of messages. Get insights in seconds, not hours."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is encrypted end-to-end. We never store your conversations permanently."
    }
  ];

  const stats = [
    { value: "10M+", label: "Messages Analyzed" },
    { value: "50K+", label: "Active Users" },
    { value: "99.8%", label: "Accuracy Rate" },
    { value: "24/7", label: "Support" }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out ChatFusionAI",
      features: [
        "Up to 1,000 messages",
        "Basic AI summaries",
        "3 visualizations",
        "Standard search",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "$29",
      popular: true,
      description: "For power users and professionals",
      features: [
        "Unlimited messages",
        "Advanced AI summaries",
        "Unlimited visualizations",
        "Semantic search",
        "Sentiment analysis",
        "Priority support",
        "Export reports"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Multi-user accounts",
        "Custom AI models",
        "API access",
        "Dedicated support",
        "SLA guarantee",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Fog Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #10b981 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "10%",
            left: "10%",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            filter: "blur(90px)",
            top: "40%",
            right: "15%",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            filter: "blur(100px)",
            bottom: "10%",
            left: "30%",
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 border-b border-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold text-white">ChatFusionAI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                Sign In
              </button>
              <Link href="/dashboard" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-all">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">AI-Powered Chat Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            ChatFusionAI:{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Smart Chat Insights
            </span>{" "}
            <span className="text-white">in Seconds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your WhatsApp conversations with AI-powered summaries, beautiful
            visualizations, and intelligent search. Unlock hidden patterns in your chats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/dashboard" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:scale-105 flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="text-gray-300 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm mb-4"
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">Powerful Features</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to analyze chats
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful AI tools designed to help you understand your conversations better
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, fast, powerful
          </h2>
          <p className="text-xl text-gray-400">Get insights in three easy steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Upload Chat", desc: "Export your WhatsApp chat and upload it securely" },
            { step: "2", title: "AI Analysis", desc: "Our AI processes your data in seconds" },
            { step: "3", title: "Get Insights", desc: "Explore summaries, charts, and patterns" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 container mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm mb-4"
          >
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">Simple Pricing</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose your plan
          </h2>
          <p className="text-xl text-gray-400">Start free, upgrade when you need more</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-emerald-500 relative' 
                  : 'border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <button className={`w-full py-3 rounded-xl font-semibold transition-all mb-6 ${
                plan.popular
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}>
                Get Started
              </button>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/30 rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to unlock your chat insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already discovering patterns in their conversations
          </p>
             <Link href="/dashboard" className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-2">
            Start Analyzing Free <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-bold  text-white">ChatFusionAI</span>
              </div>
              <p className="text-gray-400">AI-powered WhatsApp chat analysis platform</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">API</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Careers</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2025 ChatFusionAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}