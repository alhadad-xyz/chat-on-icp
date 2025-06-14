
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const AppearanceStep = () => {
  const [selectedTheme, setSelectedTheme] = useState('professional-blue');

  const themes = [
    {
      id: 'professional-blue',
      name: 'Professional Blue',
      color: 'bg-blue-500',
      description: 'Clean and professional appearance'
    },
    {
      id: 'success-green',
      name: 'Success Green',
      color: 'bg-green-500',
      description: 'Friendly and approachable design'
    },
    {
      id: 'creative-purple',
      name: 'Creative Purple',
      color: 'bg-purple-500',
      description: 'Modern and creative styling'
    },
    {
      id: 'energetic-orange',
      name: 'Energetic Orange',
      color: 'bg-orange-500',
      description: 'Vibrant and energetic feel'
    }
  ];

  return (
    <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-white">Appearance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label className="text-gray-700 dark:text-gray-300">Theme</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`p-4 rounded-lg border transition-all ${
                  selectedTheme === theme.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-white/30 dark:border-gray-600/30 bg-white/50 dark:bg-gray-700/50'
                }`}
              >
                <div className={`w-8 h-8 ${theme.color} rounded-full mx-auto mb-2`} />
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {theme.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {theme.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="welcome-message" className="text-gray-700 dark:text-gray-300">
            Welcome Message
          </Label>
          <Textarea
            id="welcome-message"
            placeholder="Hello! How can I help you today?"
            defaultValue="Hello! How can I help you today?"
            className="min-h-[100px] bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-white/30 dark:border-gray-600/30">
          <Label className="text-gray-700 dark:text-gray-300 mb-3 block">Preview</Label>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 ${themes.find(t => t.id === selectedTheme)?.color} rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-900 dark:text-white">
                    Hello! How can I help you today?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceStep;
