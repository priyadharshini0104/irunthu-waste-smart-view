
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { 
  Bell, 
  Shield, 
  User, 
  Globe, 
  Smartphone, 
  Lightbulb,
  Recycle,
  Leaf,
  Trash2
} from 'lucide-react';

const Settings = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [language, setLanguage] = useState('tamil');

  const handleSaveSettings = () => {
    toast({
      title: "வெற்றி",
      description: "அமைப்புகள் சேமிக்கப்பட்டது",
    });
  };

  const wasteManagementTips = [
    {
      icon: <Recycle className="h-5 w-5 text-green-600" />,
      title: "பிரித்து போடுங்கள்",
      description: "ஈரக் குப்பை மற்றும் உலர் குப்பையை தனித்தனியாக போடுங்கள்"
    },
    {
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      title: "கூழம் செய்யுங்கள்",
      description: "சமையலறை கழிவுகளை கூழமாக்கி தோட்டத்தில் பயன்படுத்துங்கள்"
    },
    {
      icon: <Trash2 className="h-5 w-5 text-blue-600" />,
      title: "மறுபயன்பாடு",
      description: "பிளாஸ்டிக் பொருட்களை மறுபயன்பாடு செய்யுங்கள்"
    }
  ];

  const ecoFriendlyTips = [
    "நீர் சிக்கனம் செய்யுங்கள் - குழாய்களை திறந்து விடாதீர்கள்",
    "பிளாஸ்டிக் பைகளுக்கு பதிலாக துணி பைகளை பயன்படுத்துங்கள்",
    "மின்சாரம் சிக்கனம் - தேவையற்ற விளக்குகளை அணைத்து விடுங்கள்",
    "மரம் நடுங்கள் - சுற்றுச்சூழலை பாதுகாக்க உதவுங்கள்",
    "கார்பன் உமிழ்வை குறைக்க பொது போக்குவரத்தை பயன்படுத்துங்கள்"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">அமைப்புகள்</h1>
          <p className="text-gray-600">
            உங்கள் கணக்கு மற்றும் அறிவிப்பு அமைப்புகளை நிர்வகிக்கவும்
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>சுயவிவர அமைப்புகள்</span>
              </CardTitle>
              <CardDescription>
                உங்கள் கணக்கு தகவல்களை புதுப்பிக்கவும்
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">பெயர்</Label>
                  <Input id="name" defaultValue={user?.name || ''} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">பயனர் பெயர்</Label>
                  <Input id="username" defaultValue={user?.username || ''} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">தொலைபேசி எண்</Label>
                  <Input id="phone" defaultValue={user?.phone || ''} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">பகுதி</Label>
                  <Input id="area" defaultValue={user?.area || ''} />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <Label>பயனர் வகை</Label>
                  <div className="mt-1">
                    <Badge variant="secondary">
                      {user?.role === 'user' ? 'பயனர்' : 
                       user?.role === 'worker' ? 'தொழிலாளர்' : 'தலைவர்'}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>அறிவிப்பு அமைப்புகள்</span>
              </CardTitle>
              <CardDescription>
                எப்போது அறிவிப்புகள் பெற வேண்டும் என்பதை நிர்வகிக்கவும்
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>புஷ் அறிவிப்புகள்</Label>
                  <p className="text-sm text-gray-500">
                    குப்பைத் தொட்டி நிரம்பும் போது அறிவிப்பு பெறுங்கள்
                  </p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS அலர்ட்கள்</Label>
                  <p className="text-sm text-gray-500">
                    அவசர நிலைகளில் SMS மூலம் அறிவிப்பு
                  </p>
                </div>
                <Switch checked={smsAlerts} onCheckedChange={setSmsAlerts} />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>ইমেইল் அறிவிப்புகள்</Label>
                  <p className="text-sm text-gray-500">
                    வாராந்திர அறிக்கைகள் மற்றும் புதுப்பிப்புகள்
                  </p>
                </div>
                <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} />
              </div>
            </CardContent>
          </Card>

          {/* App Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5" />
                <span>பயன்பாட்டு அமைப்புகள்</span>
              </CardTitle>
              <CardDescription>
                மொழி மற்றும் தொகுதி அமைப்புகள்
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">மொழி</Label>
                <select 
                  id="language" 
                  value={language} 
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="tamil">தமிழ்</option>
                  <option value="english">English</option>
                  <option value="hindi">हिंदी</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Waste Management Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5" />
                <span>குப்பை மேலாண்மை குறிப்புகள்</span>
              </CardTitle>
              <CardDescription>
                சுற்றுச்சூழல் பாதுகாப்பிற்கான முக்கிய குறிப்புகள்
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {wasteManagementTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    {tip.icon}
                    <div>
                      <h4 className="font-medium text-green-800">{tip.title}</h4>
                      <p className="text-sm text-green-600 mt-1">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-3 flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  சுற்றுச்சூழல் பாதுகாப்பு குறிப்புகள்
                </h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  {ecoFriendlyTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>பாதுகாப்பு</span>
              </CardTitle>
              <CardDescription>
                கடவுச்சொல் மற்றும் பாதுகாப்பு அமைப்புகள்
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                கடவுச்சொல் மாற்றவும்
              </Button>
              <Button variant="outline" className="w-full">
                இரு-காரணி அங்கீகாரம் இயக்கவும்
              </Button>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-green-600 hover:bg-green-700">
              அமைப்புகளை சேமிக்கவும்
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
