
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Plus } from 'lucide-react';

const RecentAgents = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-gray-900 dark:text-white">Recent Agents</CardTitle>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Bot className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">No agents yet</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Get started by creating your first AI agent.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentAgents;
