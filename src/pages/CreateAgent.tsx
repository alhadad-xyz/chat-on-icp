
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import CreateAgentForm from '@/components/create-agent/CreateAgentForm';
import AgentPreview from '@/components/create-agent/AgentPreview';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, ArrowRight } from 'lucide-react';

const CreateAgent = () => {
  const navigate = useNavigate();
  const [showPreview, setShowPreview] = useState(false);
  const [lastActiveStep, setLastActiveStep] = useState('basic-info');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    tone: 'professional',
    style: 'helpful',
    context: '',
    knowledgeSources: [''],
    maxResponseLength: 500,
    rememberConversation: true,
    welcomeMessage: 'Hello! How can I help you today?',
    theme: 'professional-blue'
  });

  const handleShowPreview = () => {
    setShowPreview(true);
  };

  const handleBackToForm = () => {
    setShowPreview(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 flex w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/dashboard')}
                className="mb-4 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                    {showPreview ? 'Agent Preview' : 'Create New Agent'}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {showPreview ? 'Preview your AI agent before creating' : 'Build an intelligent AI agent tailored to your needs'}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border-white/20 dark:border-gray-700/50"
                    onClick={showPreview ? handleBackToForm : handleShowPreview}
                  >
                    {showPreview ? (
                      <>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Form
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </>
                    )}
                  </Button>
                  {!showPreview && (
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                      Create Agent
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            {showPreview ? (
              <AgentPreview formData={formData} />
            ) : (
              <CreateAgentForm 
                formData={formData} 
                setFormData={setFormData}
                lastActiveStep={lastActiveStep}
                setLastActiveStep={setLastActiveStep}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateAgent;
