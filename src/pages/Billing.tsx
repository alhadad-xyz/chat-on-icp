
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
import { CreditCard, RefreshCw, Search, DollarSign, Activity, TrendingUp, Users, Calendar, CheckCircle, Clock, XCircle } from 'lucide-react';

const Billing = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <DashboardHeader />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Billing & Payments
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage your subscription, balance, and payment history
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="px-3 py-1">
                  Free Plan
                </Badge>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Add Balance
                </Button>
              </div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <Activity className="w-4 h-4" />
                <span>Overview</span>
              </TabsTrigger>
              <TabsTrigger value="add-balance" className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>Add Balance</span>
              </TabsTrigger>
              <TabsTrigger value="transactions" className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Transactions</span>
              </TabsTrigger>
              <TabsTrigger value="plans" className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Plans</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Balance</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">$0.00</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">This Month</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">45</p>
                        <p className="text-xs text-gray-500">messages used</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Spent</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">$12.50</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Agents</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Usage and Plan Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="w-5 h-5" />
                      <span>Usage Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Messages this month</span>
                        <span className="font-medium">45 / 100</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Agents Created</p>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">3 / 3</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Storage Used</p>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">45MB / 100MB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="w-5 h-5" />
                      <span>Current Plan</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community</h3>
                        <p className="text-gray-600 dark:text-gray-400">Free Tier</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                        Active
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>100 messages/month</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Basic AI models</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Community support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Upgrade Plan
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="add-balance" className="space-y-6">
              <div className="max-w-md mx-auto">
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 dark:text-green-400">Secure Payment</span>
                    </div>
                    <CardTitle className="text-xl font-semibold">Add Balance</CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">Choose an amount to add to your account</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Amount (USD)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input 
                          type="number" 
                          placeholder="0.00" 
                          className="pl-10 text-lg font-semibold"
                          step="0.01"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" size="sm">$25</Button>
                      <Button variant="outline" size="sm">$50</Button>
                      <Button variant="outline" size="sm">$100</Button>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Continue to Payment
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Payments are processed securely via Stripe
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <Card className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Transaction History</span>
                    </CardTitle>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input placeholder="Search transactions..." className="pl-10" />
                    </div>
                    <Select defaultValue="all-types">
                      <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-types">All Types</SelectItem>
                        <SelectItem value="topup">Balance Top-up</SelectItem>
                        <SelectItem value="usage">Usage Charge</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Balance top-up</div>
                          <div className="text-sm text-gray-500">Jun 16, 2025, 03:34 PM • ID: pay_001</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                        <span className="font-semibold text-green-600">+$25.00</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <Activity className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">Usage charge</div>
                          <div className="text-sm text-gray-500">Jun 15, 2025, 02:15 PM • ID: charge_002</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                        <span className="font-semibold text-red-600">-$2.50</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="plans" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Choose Your Plan</h2>
                <p className="text-gray-600 dark:text-gray-400">Select the perfect plan for your needs</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Community Plan */}
                <Card className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700">
                  <CardHeader className="text-center">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-2">
                      Current Plan
                    </Badge>
                    <CardTitle>Community</CardTitle>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Free</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Perfect for trying out NeoChat</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>100 messages per month</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Basic AI models</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Community support</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" disabled>Current Plan</Button>
                  </CardContent>
                </Card>

                {/* Pro Plan */}
                <Card className="bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle>Pro</CardTitle>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">$29.99</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">/month</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Perfect for growing businesses</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>5,000 messages per month</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Premium AI models</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Priority support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Upgrade to Pro
                    </Button>
                  </CardContent>
                </Card>

                {/* Enterprise Plan */}
                <Card className="bg-white dark:bg-gray-800">
                  <CardHeader className="text-center">
                    <CardTitle>Enterprise</CardTitle>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Custom</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tailored for large organizations</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Unlimited messages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>All AI models</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Dedicated support</span>
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
