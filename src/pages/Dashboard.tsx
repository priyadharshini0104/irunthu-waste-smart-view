
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
        title: "Error",
        description: "Please describe the issue",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Your report has been submitted successfully",
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
            {user?.role === 'user' && 'User Dashboard'}
            {user?.role === 'worker' && 'Worker Dashboard'}
            {user?.role === 'head' && 'Panchayat Head Dashboard'}
          </h1>
          <p className="text-gray-600">
            Welcome {user?.name}! Monitor the status of dustbins in your area.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Dustbins</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">
                All dustbins
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.critical}</div>
              <p className="text-xs text-muted-foreground">
                Needs immediate attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Warning</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.warning}</div>
              <p className="text-xs text-muted-foreground">
                Needs attention soon
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Normal</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.normal}</div>
              <p className="text-xs text-muted-foreground">
                In good condition
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Dustbin Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Dustbin Status</h2>
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
              <DialogTitle>Report Issue</DialogTitle>
              <DialogDescription>
                Please describe the issue with the dustbin in detail.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="report-message">Issue Description</Label>
                <Textarea
                  id="report-message"
                  placeholder="e.g: Dustbin is overflowing, bad smell..."
                  value={reportMessage}
                  onChange={(e) => setReportMessage(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={submitReport}>
                Submit Report
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashboard;
