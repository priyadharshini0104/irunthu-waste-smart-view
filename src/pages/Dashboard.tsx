
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import DustbinCard from '../components/DustbinCard';
import { mockDustbins } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [selectedDustbin, setSelectedDustbin] = useState<string | null>(null);
  const [reportMessage, setReportMessage] = useState('');
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  const handleReport = (dustbinId: string) => {
    setSelectedDustbin(dustbinId);
    setIsReportDialogOpen(true);
  };

  const submitReport = () => {
    if (!reportMessage.trim()) {
      toast({
        title: "பிழை",
        description: "தயவுசெய்து சிக்கல் விவரங்களை எழுதுங்கள்",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "வெற்றி",
      description: "உங்கள் புகார் வெற்றிகரமாக சமர்பிக்கப்பட்டது",
    });

    setIsReportDialogOpen(false);
    setReportMessage('');
    setSelectedDustbin(null);
  };

  const getStats = () => {
    const total = mockDustbins.length;
    const critical = mockDustbins.filter(d => d.status === 'critical' || d.status === 'overflow').length;
    const warning = mockDustbins.filter(d => d.status === 'warning').length;
    const normal = mockDustbins.filter(d => d.status === 'normal').length;
    const avgFilling = Math.round(mockDustbins.reduce((sum, d) => sum + d.fillingLevel, 0) / total);

    return { total, critical, warning, normal, avgFilling };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {user?.role === 'user' && 'பயனர் டாஷ்போர்ட்'}
            {user?.role === 'worker' && 'தொழிலாளர் டாஷ்போர்ட்'}
            {user?.role === 'head' && 'பஞ்சாயத்து தலைவர் டாஷ்போர்ட்'}
          </h1>
          <p className="text-gray-600">
            வணக்கம் {user?.name}! உங்கள் பகுதியின் குப்பைத் தொட்டிகளின் நிலையை கண்காணிக்கவும்.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">மொத்த தொட்டிகள்</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">
                அனைத்து குப்பைத் தொட்டிகள்
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">அபாய நிலை</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.critical}</div>
              <p className="text-xs text-muted-foreground">
                உடனடி கவனம் தேவை
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">எச்சரிக்கை</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.warning}</div>
              <p className="text-xs text-muted-foreground">
                விரைவில் கவனம் தேவை
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">சாதாரண நிலை</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.normal}</div>
              <p className="text-xs text-muted-foreground">
                நல்ல நிலையில் உள்ளது
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Dustbin Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">குப்பைத் தொட்டிகளின் நிலை</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockDustbins.map((dustbin) => (
              <DustbinCard
                key={dustbin.id}
                dustbin={dustbin}
                onReport={user?.role === 'user' ? handleReport : undefined}
              />
            ))}
          </div>
        </div>

        {/* Report Dialog */}
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>சிக்கலை தெரிவிக்கவும்</DialogTitle>
              <DialogDescription>
                குப்பைத் தொட்டியில் உள்ள சிக்கல் பற்றி விவரமாக எழுதுங்கள்.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="report-message">சிக்கல் விவரம்</Label>
                <Textarea
                  id="report-message"
                  placeholder="எ.கா: குப்பைத் தொட்டி நிரம்பி வழிகிறது, துர்நாற்றம் வீசுகிறது..."
                  value={reportMessage}
                  onChange={(e) => setReportMessage(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                ரத்து செய்யவும்
              </Button>
              <Button onClick={submitReport}>
                புகார் சமர்பிக்கவும்
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashboard;
