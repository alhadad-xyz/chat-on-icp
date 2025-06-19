
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Bot, ExternalLink, Check, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

const EmbedWidget = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState({
    width: '400px',
    height: '600px',
    theme: 'light',
    position: 'bottom-right',
    primaryColor: '#6366f1',
    borderRadius: '12px',
    agentName: 'Test Agent 1',
    welcomeMessage: 'Hello! I\'m Test Agent 1. How can I help you today?',
    placeholder: 'Type your message...',
    showHeader: true,
    showPoweredBy: true,
    minimizable: true,
    autoOpen: false
  });

  const [checklist, setChecklist] = useState([
    { id: 'loads', label: 'Widget loads correctly', checked: false },
    { id: 'responsive', label: 'Chat interface is responsive', checked: false },
    { id: 'messages', label: 'Messages send and receive properly', checked: false },
    { id: 'styling', label: 'Styling matches your preferences', checked: false },
    { id: 'mobile', label: 'Widget works on mobile devices', checked: false },
    { id: 'functionality', label: 'Minimize/maximize functionality works (if enabled)', checked: false }
  ]);

  const generateEmbedCode = () => {
    return `<!-- CanistChat Embed Widget -->
<div id="canistchat-widget-agent_3"></div>
<script>
(function() {
  // CanistChat Widget Configuration
  const config = {
    agentId: "agent_3",
    width: "${config.width}",
    height: "${config.height}",
    theme: "${config.theme}",
    position: "${config.position}",
    primaryColor: "${config.primaryColor}",
    borderRadius: "${config.borderRadius}",
    agentName: "${config.agentName}",
    welcomeMessage: "${config.welcomeMessage}",
    placeholder: "${config.placeholder}",
    showHeader: ${config.showHeader},
    showPoweredBy: ${config.showPoweredBy},
    minimizable: ${config.minimizable},
    autoOpen: ${config.autoOpen}
  };
  
  // Load CanistChat Widget
  const script = document.createElement('script');
  script.src = 'https://cdn.canistchat.com/widget.js';
  script.async = true;
  script.onload = function() {
    window.CanistChat.init(config);
  };
  document.head.appendChild(script);
})();
</script>`;
  };

  const generateReactCode = () => {
    return `import React from 'react';
const CanistChatWidget = () => {
  return (
    <iframe
      src="https://cdn.canistchat.com/embed?agent=agent_3&theme=${config.theme}&color=${config.primaryColor.replace('#', '')}"
      width="${config.width}"
      height="${config.height}"
      style={{
        border: 'none',
        borderRadius: '${config.borderRadius}',
        position: 'fixed',
        ${config.position.includes('bottom') ? 'bottom' : 'top'}: '20px',
        ${config.position.includes('right') ? 'right' : 'left'}: '20px',
        zIndex: 1000
      }}
    />
  );
};
export default CanistChatWidget;`;
  };

  const generateWordPressCode = () => {
    return `<!-- Add this shortcode to any page or post -->
[canistchat agent="agent_3" theme="${config.theme}" color="${config.primaryColor.replace('#', '')}" width="${config.width}" height="${config.height}"]

<!-- Or add this to your theme's functions.php file -->
function canistchat_shortcode($atts) {
    $a = shortcode_atts(array(
        'agent' => 'agent_3',
        'theme' => 'light'
    ), $atts);
    
    return '${generateEmbedCode().replace(/\n/g, '\\n').replace(/"/g, '\\"')}';
}
add_shortcode('canistchat', 'canistchat_shortcode');`;
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "The embed code has been copied to your clipboard.",
    });
  };

  const handleChecklistChange = (id, checked) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, checked } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 flex w-full">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <DashboardHeader />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Embed Widget
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Generate and customize your chat widget for seamless integration.</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="generator">Generator</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
              </TabsList>

              <TabsContent value="generator" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Configuration Panel */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Widget Configuration</CardTitle>
                      <CardDescription>Customize your chat widget appearance and behavior</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Agent Selection */}
                      <div className="space-y-2">
                        <Label htmlFor="agent-select">Select Agent</Label>
                        <Select value={selectedAgent} onValueChange={setSelectedAgent}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose an agent" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="customer-support">Customer Support Bot</SelectItem>
                            <SelectItem value="sales-assistant">Sales Assistant</SelectItem>
                            <SelectItem value="technical-support">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Theme Selection */}
                      <div className="space-y-2">
                        <Label>Theme</Label>
                        <div className="grid grid-cols-2 gap-3">
                          <Button
                            variant={theme === 'light' ? 'default' : 'outline'}
                            onClick={() => setTheme('light')}
                            className="justify-start"
                          >
                            <Sun className="w-4 h-4 mr-2" />
                            Light
                          </Button>
                          <Button
                            variant={theme === 'dark' ? 'default' : 'outline'}
                            onClick={() => setTheme('dark')}
                            className="justify-start"
                          >
                            <Moon className="w-4 h-4 mr-2" />
                            Dark
                          </Button>
                        </div>
                      </div>

                      {/* Position */}
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <div className="grid grid-cols-2 gap-3">
                          <Button
                            variant={position === 'bottom-right' ? 'default' : 'outline'}
                            onClick={() => setPosition('bottom-right')}
                            className="justify-start"
                          >
                            Bottom Right
                          </Button>
                          <Button
                            variant={position === 'bottom-left' ? 'default' : 'outline'}
                            onClick={() => setPosition('bottom-left')}
                            className="justify-start"
                          >
                            Bottom Left
                          </Button>
                        </div>
                      </div>

                      {/* Primary Color */}
                      <div className="space-y-2">
                        <Label htmlFor="primary-color">Primary Color</Label>
                        <div className="flex items-center space-x-3">
                          <Input
                            id="primary-color"
                            type="color"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            className="w-12 h-10 p-1 border-2"
                          />
                          <Input
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            placeholder="#3B82F6"
                            className="flex-1"
                          />
                        </div>
                      </div>

                      {/* Widget Options */}
                      <div className="space-y-4">
                        <Label>Widget Options</Label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="show-branding" className="text-sm font-normal">Show Branding</Label>
                            <Switch
                              id="show-branding"
                              checked={showBranding === 'true' || showBranding === true}
                              onCheckedChange={(checked) => setShowBranding(checked.toString())}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="enable-sound" className="text-sm font-normal">Enable Sound</Label>
                            <Switch
                              id="enable-sound"
                              checked={enableSound === 'true' || enableSound === true}
                              onCheckedChange={(checked) => setEnableSound(checked.toString())}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="auto-open" className="text-sm font-normal">Auto Open</Label>
                            <Switch
                              id="auto-open"
                              checked={autoOpen === 'true' || autoOpen === true}
                              onCheckedChange={(checked) => setAutoOpen(checked.toString())}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="show-typing" className="text-sm font-normal">Show Typing Indicator</Label>
                            <Switch
                              id="show-typing"
                              checked={showTyping === 'true' || showTyping === true}
                              onCheckedChange={(checked) => setShowTyping(checked.toString())}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Welcome Message */}
                      <div className="space-y-2">
                        <Label htmlFor="welcome-message">Welcome Message</Label>
                        <Input
                          id="welcome-message"
                          value={welcomeMessage}
                          onChange={(e) => setWelcomeMessage(e.target.value)}
                          placeholder="Hi! How can I help you today?"
                        />
                      </div>

                      {/* Placeholder Text */}
                      <div className="space-y-2">
                        <Label htmlFor="placeholder-text">Placeholder Text</Label>
                        <Input
                          id="placeholder-text"
                          value={placeholderText}
                          onChange={(e) => setPlaceholderText(e.target.value)}
                          placeholder="Type your message..."
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Preview Panel */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Live Preview</CardTitle>
                      <CardDescription>See how your widget will look on your website</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 min-h-[400px] relative">
                        <div className="text-center text-gray-500 dark:text-gray-400 mb-4">
                          <Globe className="w-8 h-8 mx-auto mb-2" />
                          Your Website Preview
                        </div>
                        
                        {/* Mock Website Content */}
                        <div className="bg-white dark:bg-gray-700 rounded p-4 mb-4">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                        </div>

                        {/* Chat Widget */}
                        <div 
                          className={`fixed ${position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6'} z-50`}
                          style={{ position: 'absolute' }}
                        >
                          <div 
                            className="w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
                            style={{ borderTopColor: primaryColor }}
                          >
                            {/* Header */}
                            <div 
                              className="p-4 text-white rounded-t-lg flex items-center justify-between"
                              style={{ backgroundColor: primaryColor }}
                            >
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                  <MessageSquare className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="font-semibold text-sm">Chat Support</div>
                                  <div className="text-xs opacity-90">Online</div>
                                </div>
                              </div>
                              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                                <X className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                              <div className="flex items-start space-x-2">
                                <div className="w-6 h-6 bg-gray-300 rounded-full flex-shrink-0"></div>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-sm max-w-xs">
                                  {welcomeMessage}
                                </div>
                              </div>
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                              <div className="flex items-center space-x-2">
                                <Input 
                                  placeholder={placeholderText}
                                  className="flex-1 text-sm"
                                />
                                <Button size="icon" style={{ backgroundColor: primaryColor }}>
                                  <Send className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>

                            {showBranding && (
                              <div className="px-4 pb-2 text-center">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Powered by <span className="font-semibold text-blue-600">NeoChat</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Generated Code */}
                <Card>
                  <CardHeader>
                    <CardTitle>Generated Code</CardTitle>
                    <CardDescription>Copy and paste this code into your HTML</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
                        <code>{generateEmbedCode()}</code>
                      </pre>
                      <Button
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          navigator.clipboard.writeText(generateEmbedCode());
                          // You could add a toast notification here
                        }}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructions" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Instructions</CardTitle>
                      <CardDescription>Choose your platform for specific integration steps</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs value={selectedPlatform} onValueChange={setSelectedPlatform}>
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="html">HTML</TabsTrigger>
                          <TabsTrigger value="wordpress">WordPress</TabsTrigger>
                          <TabsTrigger value="shopify">Shopify</TabsTrigger>
                          <TabsTrigger value="react">React</TabsTrigger>
                        </TabsList>

                        <TabsContent value="html" className="space-y-4 mt-6">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</div>
                              <div>
                                <h4 className="font-semibold">Copy the embed code</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Go to the Generator tab and copy the generated code.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</div>
                              <div>
                                <h4 className="font-semibold">Paste before closing body tag</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Add the code just before the &lt;/body&gt; tag in your HTML.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</div>
                              <div>
                                <h4 className="font-semibold">Test the widget</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Save your changes and test the chat widget on your website.</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="wordpress" className="space-y-4 mt-6">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</div>
                              <div>
                                <h4 className="font-semibold">Access WordPress Admin</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Log in to your WordPress admin dashboard.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</div>
                              <div>
                                <h4 className="font-semibold">Go to Appearance → Theme Editor</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Navigate to the theme editor or use a plugin like "Insert Headers and Footers".</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</div>
                              <div>
                                <h4 className="font-semibold">Add code to footer</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Paste the embed code in the footer section or before &lt;/body&gt; tag.</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="shopify" className="space-y-4 mt-6">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</div>
                              <div>
                                <h4 className="font-semibold">Go to Online Store → Themes</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Access your Shopify admin and navigate to themes.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</div>
                              <div>
                                <h4 className="font-semibold">Edit Code</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Click "Actions" → "Edit code" for your active theme.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</div>
                              <div>
                                <h4 className="font-semibold">Edit theme.liquid</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Open theme.liquid and paste the code before &lt;/body&gt; tag.</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="react" className="space-y-4 mt-6">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</div>
                              <div>
                                <h4 className="font-semibold">Install via npm</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Run: npm install @neochat/react-widget</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</div>
                              <div>
                                <h4 className="font-semibold">Import and use</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Import the component and add it to your app with your configuration.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</div>
                              <div>
                                <h4 className="font-semibold">Configure props</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Pass your widget configuration as props to customize appearance.</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Best Practices</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Test on mobile devices</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Ensure the widget works well on all screen sizes.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Choose appropriate colors</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Match your brand colors for better integration.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Customize welcome message</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Create a friendly, relevant greeting for your visitors.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Position strategically</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Place the widget where it's visible but not intrusive.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="testing" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pre-Launch Checklist</CardTitle>
                      <CardDescription>Complete these steps before going live</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { id: 'widget-appears', label: 'Widget appears on your website', checked: false },
                          { id: 'responsive-design', label: 'Widget is responsive on mobile devices', checked: false },
                          { id: 'chat-functionality', label: 'Chat functionality works correctly', checked: false },
                          { id: 'welcome-message', label: 'Welcome message displays properly', checked: false },
                          { id: 'brand-colors', label: 'Colors match your brand', checked: false },
                          { id: 'typing-indicator', label: 'Typing indicator works (if enabled)', checked: false },
                          { id: 'sound-notifications', label: 'Sound notifications work (if enabled)', checked: false },
                          { id: 'agent-responses', label: 'Agent responds appropriately', checked: false }
                        ].map((item) => (
                          <div key={item.id} className="flex items-center space-x-3">
                            <Checkbox 
                              id={item.id}
                              defaultChecked={item.checked}
                            />
                            <Label htmlFor={item.id} className="text-sm font-normal">
                              {item.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Testing Tools</CardTitle>
                      <CardDescription>Use these tools to test your widget</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Smartphone className="w-4 h-4 mr-2" />
                          Mobile Preview
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Monitor className="w-4 h-4 mr-2" />
                          Desktop Preview
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Tablet className="w-4 h-4 mr-2" />
                          Tablet Preview
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Test Chat Flow
                        </Button>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-3">Browser Compatibility</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Chrome 80+</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Firefox 75+</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Safari 13+</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Edge 80+</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Common Issues & Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-yellow-500 pl-4 py-2">
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Widget not appearing</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">Check if the script is placed before the closing &lt;/body&gt; tag and ensure there are no JavaScript errors in the console.</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-medium text-blue-800 dark:text-blue-200">Chat not working</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">Verify your agent ID is correct and that your agent is published and active.</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-medium text-red-800 dark:text-red-200">Mobile responsiveness issues</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">Test on actual devices and adjust the widget position if it interferes with your site's mobile navigation.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmbedWidget;
