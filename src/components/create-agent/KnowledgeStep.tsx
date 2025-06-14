
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, X } from 'lucide-react';

interface FormData {
  name: string;
  description: string;
  category: string;
  visibility: 'private' | 'public';
  tone: string;
  style: string;
  communicationStyle: string;
  responsePattern: string;
  personalityTraits: string[];
  context: string;
  knowledgeSources: Array<{
    type: string;
    content: string;
  }>;
  maxResponseLength: number;
  rememberConversation: boolean;
  temperature: number;
  creativity: number;
  topP: number;
  contextWindow: number;
  maxTokens: number;
  frequencyPenalty: number;
  presencePenalty: number;
  systemPromptTemplate: string;
  welcomeMessage: string;
  theme: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  borderRadius: string;
  fontFamily: string;
  fontSize: string;
  customCSS: string;
}

interface KnowledgeStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const KnowledgeStep = ({ formData, setFormData }: KnowledgeStepProps) => {
  const addKnowledgeSource = () => {
    setFormData({
      ...formData,
      knowledgeSources: [...formData.knowledgeSources, { type: 'Manual Text', content: '' }]
    });
  };

  const removeKnowledgeSource = (index: number) => {
    setFormData({
      ...formData,
      knowledgeSources: formData.knowledgeSources.filter((_, i) => i !== index)
    });
  };

  const updateKnowledgeSource = (index: number, field: 'type' | 'content', value: string) => {
    const updated = [...formData.knowledgeSources];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({
      ...formData,
      knowledgeSources: updated
    });
  };

  const handleContextChange = (value: string) => {
    setFormData({ ...formData, context: value });
  };

  return (
    <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-white">Knowledge</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="context" className="text-gray-700 dark:text-gray-300">Context</Label>
          <Textarea
            id="context"
            placeholder="Provide background context for your agent..."
            value={formData.context}
            onChange={(e) => handleContextChange(e.target.value)}
            className="min-h-[120px] bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
          />
        </div>

        <div className="space-y-4">
          <Label className="text-gray-700 dark:text-gray-300">Knowledge Sources</Label>
          {formData.knowledgeSources.map((source, index) => (
            <div key={index} className="space-y-3 p-4 border border-white/30 dark:border-gray-600/30 rounded-lg bg-white/20 dark:bg-gray-800/20">
              <div className="flex items-center justify-between">
                <Label className="text-sm text-gray-700 dark:text-gray-300">Source Type</Label>
                {formData.knowledgeSources.length > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeKnowledgeSource(index)}
                    className="bg-red-50 hover:bg-red-100 border-red-200 text-red-600"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
              <Select 
                value={source.type} 
                onValueChange={(value) => updateKnowledgeSource(index, 'type', value)}
              >
                <SelectTrigger className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Manual Text">Manual Text</SelectItem>
                  <SelectItem value="URL">URL</SelectItem>
                  <SelectItem value="File Upload">File Upload</SelectItem>
                  <SelectItem value="Database">Database</SelectItem>
                </SelectContent>
              </Select>
              <div className="space-y-2">
                <Label className="text-sm text-gray-700 dark:text-gray-300">Knowledge Content</Label>
                <Textarea
                  placeholder="Enter your knowledge content here..."
                  value={source.content}
                  onChange={(e) => updateKnowledgeSource(index, 'content', e.target.value)}
                  className="min-h-[100px] bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
                />
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={addKnowledgeSource}
            className="w-full bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Knowledge Source
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeStep;
