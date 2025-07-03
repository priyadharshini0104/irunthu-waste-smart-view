
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Recycle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'worker' | 'head'>('user');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast({
        title: "பிழை",
        description: "பயனர் பெயர் மற்றும் கடவுச்சொல் தேவை",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await login(username, password, role);
      if (success) {
        toast({
          title: "வெற்றி",
          description: "வெற்றிகரமாக உள்நுழைந்தீர்கள்",
        });
        navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: "பிழை",
        description: "உள்நுழைவு தோல்வி",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Trash2 className="h-10 w-10 text-green-600" />
            <Recycle className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">ஸ்மார்ட் குப்பை மேலாண்மை</h1>
          <p className="text-gray-600 mt-2">சுத்தமான சுற்றுச்சூழலுக்கான டிஜிட்டல் தீர்வு</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">உள்நுழைவு</CardTitle>
            <CardDescription className="text-center">
              உங்கள் கணக்கில் உள்நுழைந்து சேவையை பயன்படுத்துங்கள்
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">பயனர் பெயர்</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="உங்கள் பயனர் பெயரை உள்ளிடுங்கள்"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-11"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">கடவுச்சொல்</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="உங்கள் கடவுச்சொல்லை உள்ளிடுங்கள்"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-medium">பயனர் வகை தேர்ந்தெடுக்கவும்:</Label>
                <RadioGroup value={role} onValueChange={(value) => setRole(value as 'user' | 'worker' | 'head')}>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="user" id="user" />
                    <Label htmlFor="user" className="flex-1 cursor-pointer">
                      <div className="font-medium">பயனர்</div>
                      <div className="text-sm text-gray-500">குப்பைத் தொட்டிகளை கண்காணிக்க மற்றும் புகார் அளிக்க</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="worker" id="worker" />
                    <Label htmlFor="worker" className="flex-1 cursor-pointer">
                      <div className="font-medium">தொழிலாளர்</div>
                      <div className="text-sm text-gray-500">குப்பை சேகரிப்பு மற்றும் நிலை புதுப்பிப்பு</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                    <RadioGroupItem value="head" id="head" />
                    <Label htmlFor="head" className="flex-1 cursor-pointer">
                      <div className="font-medium">பஞ்சாயத்து தலைவர்</div>
                      <div className="text-sm text-gray-500">முழு அமைப்பு கண்காணிப்பு மற்றும் நிர்வாகம்</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember" className="text-sm">
                  என்னை நினைவில் வைத்துக் கொள்ளுங்கள்
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-green-600 hover:bg-green-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'உள்நுழைகிறது...' : 'உள்நுழைவு'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>டெமோ கணக்குகள்:</p>
              <p>பயனர்: user/user | தொழிலாளர்: worker/worker | தலைவர்: admin/admin</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
