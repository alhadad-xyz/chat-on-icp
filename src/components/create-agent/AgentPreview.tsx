
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AgentPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgentPreview = ({ isOpen, onClose }: AgentPreviewProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Agent Preview</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          {/* Main Agent Card */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Agent Name
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    Agent description will appear here...
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50">
                      Tone: professional
                    </span>
                    <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50">
                      Style: helpful
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Preview */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Chat Preview</h4>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
              {/* Agent Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                    <p className="text-gray-900 dark:text-white text-sm">
                      Hello! How can I help you today?
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1 mt-1 block">
                    Just now
                  </span>
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="flex-1 flex flex-col items-end">
                  <div className="bg-blue-600 rounded-lg p-3 max-w-xs">
                    <p className="text-white text-sm">
                      Hi there! I need some help.
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mr-1 mt-1 block">
                    Just now
                  </span>
                </div>
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Conversations</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">Ready</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">New</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Type</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPreview;
