
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, MessageSquare, BarChart3, DollarSign, CheckCircle } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 flex w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <DashboardHeader />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                  User Profile
                </h1>
                <p className="text-gray-600 dark:text-gray-400">Manage your account, balance, and view detailed usage statistics.</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <DollarSign className="w-4 h-4 mr-2" />
                Add Balance
              </Button>
            </div>

            <div className="space-y-6">
              {/* Account Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">User ID</h4>
                      <p className="text-sm text-gray-900 dark:text-white font-mono">cgw7e--xi3z..-3wf6n-wae</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Account Tier</h4>
                      <p className="text-sm text-gray-900 dark:text-white">Base</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Current Balance</h4>
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400">$0.00</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Member Since</h4>
                      <p className="text-sm text-gray-900 dark:text-white">6/19/2025</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Agents</h4>
                      <p className="text-sm text-gray-900 dark:text-white">1</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Messages</h4>
                      <p className="text-sm text-gray-900 dark:text-white">0</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Agents</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Conversations</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Messages</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                        <DollarSign className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Balance</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">$0.00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Base Tier Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Base Tier Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Basic chat functionality</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Up to 1,000 messages/month</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Standard support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Usage Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Month Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Messages</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Tokens Used</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Cost</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">$0.0000</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Last Month Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Messages</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Tokens Used</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">0</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Cost</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">$0.0000</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
