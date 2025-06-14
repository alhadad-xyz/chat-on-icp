
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, X } from 'lucide-react';

const KnowledgeStep = () => {
  const [knowledgeSources, setKnowledgeSources] = useState<string[]>(['']);

  const addKnowledgeSource = () => {
    setKnowledgeSources([...knowledgeSources, '']);
  };

  const removeKnowledgeSource = (index: number) => {
    setKnowledgeSources(knowledgeSources.filter((_, i) => i !== index));
  };

  const updateKnowledgeSource = (index: number, value: string) => {
    const updated = [...knowledgeSources];
    updated[index] = value;
    setKnowledgeSources(updated);
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
            className="min-h-[120px] bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
          />
        </div>

        <div className="space-y-4">
          <Label className="text-gray-700 dark:text-gray-300">Knowledge Sources</Label>
          {knowledgeSources.map((source, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Input
                placeholder="Add a knowledge source URL"
                value={source}
                onChange={(e) => updateKnowledgeSource(index, e.target.value)}
                className="flex-1 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-white/30 dark:border-gray-600/30"
              />
              {knowledgeSources.length > 1 && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => removeKnowledgeSource(index)}
                  className="bg-white/50 dark:bg-gray-700/50 border-white/30 dark:border-gray-600/30"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button
            variant="outline"
            onClick={addKnowledgeSource}
            className="w-full bg-white/50 dark:bg-gray-700/50 border-white/30 dark:border-gray-600/30 text-blue-600 dark:text-blue-400"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Source
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeStep;
