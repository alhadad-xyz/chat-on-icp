
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
                Embed Widget Generator
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Generate embed code and integration instructions for <strong>{config.agentName}</strong>
              </p>
            </div>

            <Tabs defaultValue="generator" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="generator">Generator</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
              </TabsList>

              <TabsContent value="generator" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Configuration Panel */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Customization Options</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="width">Width</Label>
                            <Input
                              id="width"
                              value={config.width}
                              onChange={(e) => setConfig({...config, width: e.target.value})}
                              placeholder="400px"
                            />
                          </div>
                          <div>
                            <Label htmlFor="height">Height</Label>
                            <Input
                              id="height"
                              value={config.height}
                              onChange={(e) => setConfig({...config, height: e.target.value})}
                              placeholder="600px"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="theme">Theme</Label>
                            <Select value={config.theme} onValueChange={(value) => setConfig({...config, theme: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select theme" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="auto">Auto</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="position">Position</Label>
                            <Select value={config.position} onValueChange={(value) => setConfig({...config, position: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select position" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bottom-right">Bottom Right</SelectItem>
                                <SelectItem value="bottom-left">Bottom Left</SelectItem>
                                <SelectItem value="top-right">Top Right</SelectItem>
                                <SelectItem value="top-left">Top Left</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="primaryColor">Primary Color</Label>
                          <div className="flex space-x-2">
                            <Input
                              id="primaryColor"
                              type="color"
                              value={config.primaryColor}
                              onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                              className="w-16 h-10 p-1 border-2"
                            />
                            <Input
                              value={config.primaryColor}
                              onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                              className="flex-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="borderRadius">Border Radius</Label>
                          <Input
                            id="borderRadius"
                            value={config.borderRadius}
                            onChange={(e) => setConfig({...config, borderRadius: e.target.value})}
                            placeholder="12px"
                          />
                        </div>

                        <div>
                          <Label htmlFor="welcomeMessage">Welcome Message</Label>
                          <Textarea
                            id="welcomeMessage"
                            value={config.welcomeMessage}
                            onChange={(e) => setConfig({...config, welcomeMessage: e.target.value})}
                            placeholder="Hello! I'm Test Agent 1. How can I help you today?"
                            className="min-h-[60px]"
                          />
                        </div>

                        <div>
                          <Label htmlFor="placeholder">Input Placeholder</Label>
                          <Input
                            id="placeholder"
                            value={config.placeholder}
                            onChange={(e) => setConfig({...config, placeholder: e.target.value})}
                            placeholder="Type your message..."
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="showHeader"
                              checked={config.showHeader}
                              onCheckedChange={(checked) => setConfig({...config, showHeader: checked})}
                            />
                            <Label htmlFor="showHeader">Show Header</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="showPoweredBy"
                              checked={config.showPoweredBy}
                              onCheckedChange={(checked) => setConfig({...config, showPoweredBy: checked})}
                            />
                            <Label htmlFor="showPoweredBy">Show "Powered by"</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="minimizable"
                              checked={config.minimizable}
                              onCheckedChange={(checked) => setConfig({...config, minimizable: checked})}
                            />
                            <Label htmlFor="minimizable">Minimizable</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="autoOpen"
                              checked={config.autoOpen}
                              onCheckedChange={(checked) => setConfig({...config, autoOpen: checked})}
                            />
                            <Label htmlFor="autoOpen">Auto Open</Label>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Enterprise Badge */}
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Enterprise Ready
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Advanced LLM integration with intelligent load balancing
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Preview and Code Generation */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Preview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
                          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-80 h-96 flex flex-col">
                            {config.showHeader && (
                              <div 
                                className="flex items-center p-4 rounded-t-lg text-white"
                                style={{ backgroundColor: config.primaryColor }}
                              >
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                  <Bot className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="font-medium">{config.agentName}</div>
                                  <div className="text-xs opacity-80">AI Assistant</div>
                                </div>
                              </div>
                            )}
                            <div className="flex-1 p-4 space-y-3">
                              <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3 max-w-xs">
                                <p className="text-sm">{config.welcomeMessage}</p>
                                <span className="text-xs text-gray-500 dark:text-gray-400">03:47 PM</span>
                              </div>
                            </div>
                            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                              <div className="flex space-x-2">
                                <Input 
                                  placeholder={config.placeholder} 
                                  className="flex-1 text-sm"
                                  disabled
                                />
                                <Button size="sm" style={{ backgroundColor: config.primaryColor }}>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                          Chat interface preview
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          Generated Embed Code
                          <Button onClick={() => copyToClipboard(generateEmbedCode())} size="sm" variant="outline">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy HTML
                          </Button>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          value={generateEmbedCode()}
                          readOnly
                          className="font-mono text-sm bg-gray-50 dark:bg-gray-800 min-h-[200px] resize-none"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructions" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <CardTitle>Quick Start Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <h4 className="font-medium text-green-800 dark:text-green-200">Copy the embed code</h4>
                            <p className="text-sm text-green-600 dark:text-green-300">from the Generator tab above</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <h4 className="font-medium text-blue-800 dark:text-blue-200">Paste it into your website's HTML</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-300">where you want the chat widget to appear</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <h4 className="font-medium text-purple-800 dark:text-purple-200">Save and publish</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-300">your page - the widget will automatically load</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Platform-Specific Instructions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-sm font-bold">W</span>
                        </div>
                        <span>WordPress</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Go to your WordPress admin panel</li>
                        <li>Edit the page/post where you want the widget</li>
                        <li>Switch to "Text" or "HTML" mode</li>
                        <li>Paste the embed code</li>
                        <li>Update/publish the page</li>
                      </ol>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => copyToClipboard(generateWordPressCode())}
                        className="w-full"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy WordPress Code
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                          <span className="text-white text-sm font-bold">S</span>
                        </div>
                        <span>Shopify</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Go to Online Store → Themes</li>
                        <li>Click "Actions" → "Edit code"</li>
                        <li>Find your theme.liquid file</li>
                        <li>Paste the code before &lt;/body&gt;</li>
                        <li>Save the file</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center">
                          <span className="text-white text-sm font-bold">S</span>
                        </div>
                        <span>Squarespace</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Go to Settings → Advanced → Code Injection</li>
                        <li>Paste the code in "Footer"</li>
                        <li>Or use a Code Block on specific pages</li>
                        <li>Save and publish</li>
                      </ol>
                    </CardContent>
                  </Card>

                  {/* Advanced Configuration */}
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Advanced Configuration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3">Customization Options</h4>
                          <div className="space-y-2 text-sm">
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">inline</code> - Embedded in page content</div>
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">bottom-right</code> - Floating bottom right</div>
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">bottom-left</code> - Floating bottom left</div>
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">top-right</code> - Floating top right</div>
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">top-left</code> - Floating top left</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">Theme Options</h4>
                          <div className="space-y-2 text-sm">
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">light</code> - Light theme</div>
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">dark</code> - Dark theme</div>
                            <div><code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">auto</code> - Matches system preference</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Troubleshooting */}
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        <span>Troubleshooting</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Widget not appearing?</h4>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Check that the container div ID matches the agent ID in the script.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Widget not loading?</h4>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">Ensure your website allows iframe content and check browser console for errors.</p>
                        </div>
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Styling issues?</h4>
                          <p className="text-sm text-yellow-700 dark:text-yellow-300">The widget uses iframe isolation, so your site's CSS won't affect it. Customize using the options above.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="testing" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Test Your Widget</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex space-x-2">
                          <Button variant="default" className="flex-1">
                            Preview Mode
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Test
                          </Button>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <Button variant="outline" className="w-full text-green-700 dark:text-green-300 border-green-300 hover:bg-green-100 dark:hover:bg-green-900/40">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open Widget in New Window
                          </Button>
                          <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                            This will open your widget in a new window so you can test the full functionality, including chat interactions and responsiveness.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Testing Checklist</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {checklist.map((item) => (
                            <div key={item.id} className="flex items-center space-x-3">
                              <Checkbox
                                id={item.id}
                                checked={item.checked}
                                onCheckedChange={(checked) => handleChecklistChange(item.id, checked)}
                              />
                              <Label htmlFor={item.id} className="text-sm">
                                {item.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Widget Preview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 min-h-[500px] flex items-center justify-center">
                          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-80 h-96 flex flex-col">
                            <div 
                              className="flex items-center p-4 rounded-t-lg text-white"
                              style={{ backgroundColor: config.primaryColor }}
                            >
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                <span className="text-sm font-bold">T</span>
                              </div>
                              <div>
                                <div className="font-medium">{config.agentName}</div>
                                <div className="text-xs opacity-80">Test</div>
                              </div>
                            </div>
                            <div className="flex-1 p-4 space-y-3">
                              <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3 max-w-xs">
                                <p className="text-sm">{config.welcomeMessage}</p>
                                <span className="text-xs text-gray-500 dark:text-gray-400">03:47 PM</span>
                              </div>
                            </div>
                            <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                              <div className="flex space-x-2">
                                <Input 
                                  placeholder={config.placeholder} 
                                  className="flex-1 text-sm"
                                  disabled
                                />
                                <Button size="sm" style={{ backgroundColor: config.primaryColor }}>
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmbedWidget;
