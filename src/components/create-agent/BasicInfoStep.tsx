
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const BasicInfoStep = () => {
  return (
    <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-white">Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="agent-name" className="text-gray-700 dark:text-gray-300">
              Agent Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="agent-name"
              placeholder="e.g. Customer Support Assistant"
              className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-gray-700 dark:text-gray-300">Preview</Label>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-white/30 dark:border-gray-600/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">A</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Agent Name</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Agent description will appear here...
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Tone: professional | Style: helpful
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">
            Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Describe what your agent does and how it helps users..."
            className="min-h-[120px] bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfoStep;
