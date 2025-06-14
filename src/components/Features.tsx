
import React from 'react';
import { Bot, Code, Database, Globe, Lock, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Agent Builder',
      description: 'Create custom AI agents with unique personalities, knowledge bases, and conversation styles using our intuitive wizard.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: 'On-Chain Storage',
      description: 'All agent configurations and conversation logs stored securely on ICP canisters with full encryption.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Easy Embedding',
      description: 'Deploy your AI agents anywhere with our JavaScript SDK and customizable web components.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Lock,
      title: 'Internet Identity',
      description: 'Secure authentication and agent ownership through ICP\'s decentralized identity system.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Chain Fusion',
      description: 'Connect to external data sources and other blockchains using HTTPS outcalls and EVM RPC integration.',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: TrendingUp,
      title: 'Usage Analytics',
      description: 'Track performance metrics, usage patterns, and optimize your AI agents with detailed analytics.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Decentralized AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, deploy, and manage intelligent AI agents on the blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
