
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface FormData {
  name: string;
  description: string;
  tone: string;
  style: string;
  context: string;
  knowledgeSources: string[];
  maxResponseLength: number;
  rememberConversation: boolean;
  welcomeMessage: string;
  theme: string;
}

interface BehaviorStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const BehaviorStep = ({ formData, setFormData }: BehaviorStepProps) => {
  const handleMaxResponseChange = (value: string) => {
    setFormData({ ...formData, maxResponseLength: parseInt(value) || 500 });
  };

  const handleRememberConversationChange = (checked: boolean) => {
    setFormData({ ...formData, rememberConversation: checked });
  };

  return (
    <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-white">Behavior</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="max-response" className="text-gray-700 dark:text-gray-300">
            Max Response Length
          </Label>
          <Input
            id="max-response"
            type="number"
            value={formData.maxResponseLength}
            onChange={(e) => handleMaxResponseChange(e.target.value)}
            placeholder="500"
            className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember-conversation"
            checked={formData.rememberConversation}
            onCheckedChange={handleRememberConversationChange}
            className="border-white/30 dark:border-gray-600/30"
          />
          <Label
            htmlFor="remember-conversation"
            className="text-gray-700 dark:text-gray-300 cursor-pointer"
          >
            Remember conversation history
          </Label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-gray-700 dark:text-gray-300">Response Speed</Label>
            <div className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg border border-white/30 dark:border-gray-600/30">
              <div className="text-sm text-gray-600 dark:text-gray-400">Fast</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Optimized for quick responses</div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700 dark:text-gray-300">Learning Mode</Label>
            <div className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg border border-white/30 dark:border-gray-600/30">
              <div className="text-sm text-gray-600 dark:text-gray-400">Adaptive</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">Learns from interactions</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BehaviorStep;
