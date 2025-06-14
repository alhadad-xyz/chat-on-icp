
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BasicInfoStep from './BasicInfoStep';
import PersonalityStep from './PersonalityStep';
import KnowledgeStep from './KnowledgeStep';
import BehaviorStep from './BehaviorStep';
import AppearanceStep from './AppearanceStep';

interface FormData {
  name: string;
  description: string;
  tone: string;
  style: string;
  context: string;
  knowledgeSources: string[];
  maxResponseLength: number;
  rememberConversation: boolean;
}

interface CreateAgentFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const CreateAgentForm = ({ formData, setFormData }: CreateAgentFormProps) => {
  const [activeTab, setActiveTab] = useState('basic-info');

  const steps = [
    { id: 'basic-info', label: 'Basic Info', component: BasicInfoStep },
    { id: 'personality', label: 'Personality', component: PersonalityStep },
    { id: 'knowledge', label: 'Knowledge', component: KnowledgeStep },
    { id: 'behavior', label: 'Behavior', component: BehaviorStep },
    { id: 'appearance', label: 'Appearance', component: AppearanceStep },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1">
        <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 shadow-xl sticky top-8">
          <CardContent className="p-6">
            <nav className="space-y-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveTab(step.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === step.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>

      {/* Form Content */}
      <div className="lg:col-span-3">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {steps.map((step) => (
            <TabsContent key={step.id} value={step.id}>
              <step.component formData={formData} setFormData={setFormData} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CreateAgentForm;
