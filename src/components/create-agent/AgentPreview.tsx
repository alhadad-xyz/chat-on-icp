
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FormData {
  name: string;
  description: string;
  tone: string;
  style: string;
  context: string;
  knowledgeSources: string[];
  maxResponseLength: number;
  rememberConversation: boolean;
  welcomeMessage?: string;
  theme?: string;
}

interface AgentPreviewProps {
  formData: FormData;
}

const AgentPreview = ({ formData }: AgentPreviewProps) => {
  const getThemeColor = () => {
    switch (formData.theme) {
      case 'success-green':
        return 'from-green-500 to-green-600';
      case 'creative-purple':
        return 'from-purple-500 to-purple-600';
      case 'energetic-orange':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Agent Card */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${getThemeColor()} rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-xl font-bold">
                {formData.name ? formData.name.charAt(0).toUpperCase() : 'A'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {formData.name || 'Agent Name'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                {formData.description || 'Agent description will appear here...'}
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50">
                  Tone: {formData.tone}
                </span>
                <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50">
                  Style: {formData.style}
                </span>
                <span className="bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50">
                  Max Length: {formData.maxResponseLength}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Knowledge & Context */}
      {formData.context && (
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">Knowledge Base</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{formData.context}</p>
            {formData.knowledgeSources.filter(source => source.trim()).length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sources:</h4>
                <ul className="space-y-1">
                  {formData.knowledgeSources.filter(source => source.trim()).map((source, index) => (
                    <li key={index} className="text-sm text-blue-600 dark:text-blue-400 truncate">
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Chat Preview */}
      <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900 dark:text-white">Chat Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-4">
            {/* Agent Message */}
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${getThemeColor()} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-sm font-medium">
                  {formData.name ? formData.name.charAt(0).toUpperCase() : 'A'}
                </span>
              </div>
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                  <p className="text-gray-900 dark:text-white text-sm">
                    {formData.welcomeMessage || "Hello! How can I help you today?"}
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
        </CardContent>
      </Card>

      {/* Agent Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="text-center p-4">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Conversations</div>
          </CardContent>
        </Card>
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="text-center p-4">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {formData.rememberConversation ? 'Memory On' : 'Memory Off'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Conversation Memory</div>
          </CardContent>
        </Card>
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="text-center p-4">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Ready</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentPreview;
