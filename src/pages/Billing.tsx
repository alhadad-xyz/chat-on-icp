
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, RefreshCw, Search } from 'lucide-react';

const Billing = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 flex w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <DashboardHeader />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                  Payment Management
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Manage your balance, payments, and subscription plans
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="bg-white/60 dark:bg-gray-800/60">
                  Free Plan
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Add Balance
                </Button>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <span>📊</span>
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="add-balance" className="flex items-center space-x-2">
                <span>💳</span>
                <span>Add Balance</span>
              </TabsTrigger>
              <TabsTrigger value="transactions" className="flex items-center space-x-2">
                <span>📋</span>
                <span>Transactions</span>
              </TabsTrigger>
              <TabsTrigger value="plans" className="flex items-center space-x-2">
                <span>🎯</span>
                <span>Plans</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Account Balance</CardTitle>
                    <Button variant="ghost" size="icon">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Current Balance</div>
                      <div className="text-3xl font-bold">$0.00</div>
                      <div className="text-sm text-gray-500">Available for usage and overage charges</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Monthly Usage</div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>0 / 100 messages</span>
                        <span>0%</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Plan Features</div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Basic Chat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span>Standard Response</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>Support Level: Community</div>
                        <div>AI Models: 1 available</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Current Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Free Tier</Badge>
                      <span className="text-sm text-gray-600 dark:text-gray-400">$0.00/month</span>
                    </div>
                    <div className="text-sm text-gray-500">Last updated: Invalid Date</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700">
                      💳 Add Balance
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700">
                      ⭐ Upgrade Plan
                    </Button>
                    <Button variant="outline" className="w-full">
                      📊 View Transactions
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Usage Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">This Month</span>
                      <span className="font-semibold">45 messages</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Last Month</span>
                      <span className="font-semibold">78 messages</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Total Spent</span>
                      <span className="font-semibold">$12.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Avg. per Message</span>
                      <span className="font-semibold">$0.10</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="add-balance" className="space-y-6">
              <Card className="max-w-md mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Secure SSL Encrypted</span>
                    <span className="text-xs text-gray-500">PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <span className="text-sm font-medium">Amount</span>
                    </div>
                    <div className="flex items-center space-x-2 opacity-50">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <span className="text-sm">Method</span>
                    </div>
                    <div className="flex items-center space-x-2 opacity-50">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <span className="text-sm">Details</span>
                    </div>
                    <div className="flex items-center space-x-2 opacity-50">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <span className="text-sm">Confirm</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">Add Balance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Amount (USD)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <Input 
                        type="number" 
                        placeholder="0.00" 
                        className="pl-8 text-lg font-semibold"
                        step="0.01"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" size="sm">$25</Button>
                    <Button variant="outline" size="sm">$50</Button>
                    <Button variant="outline" size="sm">$100</Button>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1">Cancel</Button>
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700">Next</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Transaction History</CardTitle>
                  <Button variant="ghost" size="icon">
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input placeholder="Search transactions..." className="pl-10" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Select defaultValue="all-types">
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-types">All Types</SelectItem>
                        <SelectItem value="topup">Balance Top-up</SelectItem>
                        <SelectItem value="usage">Usage Charge</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all-status">
                      <SelectTrigger>
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-status">All Status</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="last-30">
                      <SelectTrigger>
                        <SelectValue placeholder="Date Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="last-30">Last 30 Days</SelectItem>
                        <SelectItem value="last-90">Last 90 Days</SelectItem>
                        <SelectItem value="this-year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="text-sm text-gray-500 text-right">2 transactions found</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white/40 dark:bg-gray-700/40 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium">Balance top-up</div>
                          <div className="text-sm text-gray-500">Jun 16, 2025, 03:34 PM • ID: pay_001</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-700">completed</Badge>
                        <span className="font-semibold text-green-600">+$25.00</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/40 dark:bg-gray-700/40 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div>
                          <div className="font-medium">Balance top-up</div>
                          <div className="text-sm text-gray-500">Jun 15, 2025, 03:34 PM • ID: pay_002</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-700">completed</Badge>
                        <span className="font-semibold text-green-600">+$50.00</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="plans" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Choose Your Plan</h2>
                <p className="text-gray-600 dark:text-gray-400">Select the perfect plan for your needs. Upgrade or downgrade anytime.</p>
                <div className="flex items-center justify-center space-x-4 mt-6">
                  <span className="text-sm">Monthly</span>
                  <Button variant="outline" size="sm">Yearly</Button>
                  <Badge className="bg-purple-100 text-purple-700">Most Popular</Badge>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Community Free Plan */}
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-blue-200 dark:border-blue-700/50 border-2">
                  <CardHeader className="text-center">
                    <div className="mb-2">
                      <Badge className="bg-blue-100 text-blue-700">Current Plan</Badge>
                    </div>
                    <CardTitle>Community</CardTitle>
                    <div className="text-2xl font-bold">Free</div>
                    <p className="text-sm text-gray-600">Perfect for trying out CanistChat and small personal projects.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>100 messages per month</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>Basic AI models</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>Community support</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" disabled>Current Plan</Button>
                  </CardContent>
                </Card>

                {/* Pro Plan */}
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-purple-200 dark:border-purple-700/50 border-2 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle>Pro</CardTitle>
                    <div className="text-2xl font-bold">$29.99</div>
                    <div className="text-sm text-gray-600">/month</div>
                    <p className="text-sm text-gray-600">Perfect for growing businesses and teams that need advanced features.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>5,000 messages per month</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>Premium AI models</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>Priority support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>API access</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700">Upgrade to Pro</Button>
                  </CardContent>
                </Card>

                {/* Enterprise Plan */}
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50">
                  <CardHeader className="text-center">
                    <CardTitle>Enterprise</CardTitle>
                    <div className="text-2xl font-bold">Free</div>
                    <p className="text-sm text-gray-600">Tailored solutions for large organizations with specific requirements.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>Unlimited messages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>All AI models</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>Dedicated support</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 text-green-500">✓</span>
                        <span>Custom integrations</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">Contact Sales</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Billing;
