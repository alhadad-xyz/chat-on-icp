
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Community',
      price: 'Free',
      period: '',
      description: 'Perfect for trying out CanistChat and small personal projects.',
      features: [
        '100 messages per month',
        'Basic AI models',
        'Community support',
        'Public agent gallery',
        'Basic customization',
        'Premium AI models',
        'Priority support',
        'API access',
        'Custom branding'
      ],
      limits: {
        messages: '100',
        agents: '3',
        storage: '100MB',
        support: 'Community'
      },
      popular: false,
      buttonText: 'Current Plan',
      buttonVariant: 'outline' as const
    },
    {
      name: 'Base',
      price: '$9.99',
      period: '/month',
      description: 'Great for individuals and small teams getting started with AI chat.',
      features: [
        '1,000 messages per month',
        'Standard AI models',
        'Email support',
        'Private agents',
        'Advanced customization',
        'Premium AI models',
        'Priority support',
        'API access',
        'Custom branding'
      ],
      limits: {
        messages: '1,000',
        agents: '10',
        storage: '1GB',
        support: 'Email'
      },
      popular: false,
      buttonText: 'Upgrade to Base',
      buttonVariant: 'default' as const
    },
    {
      name: 'Pro',
      price: '$29.99',
      period: '/month',
      description: 'Perfect for growing businesses and teams that need advanced features.',
      features: [
        '5,000 messages per month',
        'Premium AI models',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Custom integrations',
        'Team collaboration',
        'Custom branding',
        'Dedicated support'
      ],
      limits: {
        messages: '5,000',
        agents: '50',
        storage: '10GB',
        support: 'Priority'
      },
      popular: true,
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'default' as const
    },
    {
      name: 'Enterprise',
      price: 'Free',
      period: '',
      description: 'Tailored solutions for large organizations with specific requirements.',
      features: [
        'Unlimited messages',
        'All AI models',
        'Dedicated support',
        'Custom features',
        'SLA guarantees',
        'On-premise deployment',
        'Training & onboarding',
        'Volume discounts'
      ],
      limits: {
        messages: 'Unlimited',
        agents: 'Unlimited',
        storage: 'Unlimited',
        support: 'Dedicated'
      },
      popular: false,
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className="text-gray-600 dark:text-gray-400">Monthly</span>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="text-sm">
                Yearly
              </Button>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Most Popular
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-purple-200 dark:border-purple-500/50 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    WHAT'S INCLUDED
                  </div>
                  <div className="space-y-3">
                    {plan.features.slice(0, 5).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Plan Limits
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Messages:</span>
                      <br />
                      <span className="font-medium">{plan.limits.messages}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Agents:</span>
                      <br />
                      <span className="font-medium">{plan.limits.agents}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Storage:</span>
                      <br />
                      <span className="font-medium">{plan.limits.storage}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Support:</span>
                      <br />
                      <span className="font-medium">{plan.limits.support}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : plan.buttonVariant === 'default' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                        : ''
                  }`}
                  disabled={plan.buttonText === 'Current Plan'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Can I change my plan anytime?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and we'll provide any billing adjustments.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                What happens if I exceed my message limit?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                You'll be charged $0.02 per additional message. We'll notify you when approaching your limit so you can upgrade if needed.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is there a free trial for paid plans?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Yes! All paid plans come with a 14-day free trial. No credit card required to start your trial.
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                How does Enterprise pricing work?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Enterprise pricing is customized based on your specific needs, usage volume, and required features. Contact our sales team for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
