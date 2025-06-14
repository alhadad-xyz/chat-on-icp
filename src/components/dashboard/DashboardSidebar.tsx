
import React from 'react';
import { Bot, BarChart3, Users, Plus, MessageSquare, Code, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardSidebar = () => {
  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Users, label: 'My Agents' },
    { icon: Plus, label: 'Create Agent' },
    { icon: MessageSquare, label: 'Chat' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Code, label: 'Embed Widget' },
    { icon: User, label: 'Profile' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            NeoChat
          </span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start ${
                item.active 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
