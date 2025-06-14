
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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

interface BasicInfoStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const BasicInfoStep = ({ formData, setFormData }: BasicInfoStepProps) => {
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-white">Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="agent-name" className="text-gray-700 dark:text-gray-300">
            Agent Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="agent-name"
            placeholder="e.g. Customer Support Assistant"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">
            Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="description"
            placeholder="Describe what your agent does and how it helps users..."
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            className="min-h-[120px] bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfoStep;
