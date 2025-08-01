
import React, { useState } from 'react';
import { mockReports, mockDustbins } from '../data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, CheckCircle2, Clock, MapPin, Phone, User } from 'lucide-react';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'High';
      case 'medium': return 'Medium';
      case 'low': return 'Low';
      default: return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'text-green-600 bg-green-50 border-green-200';
      case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'resolved': return 'Resolved';
      case 'pending': return 'Pending';
      default: return 'Unknown';
    }
  };

  const getDustbinInfo = (dustbinId: string) => {
    return mockDustbins.find(d => d.id === dustbinId);
  };

  const filteredReports = mockReports.filter(report => {
    if (activeTab === 'pending') return report.status === 'pending';
    if (activeTab === 'resolved') return report.status === 'resolved';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
          <p className="text-gray-600">
            Complaints received from users and their status
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockReports.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {mockReports.filter(r => r.status === 'pending').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {mockReports.filter(r => r.status === 'resolved').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <Card>
          <CardHeader>
            <CardTitle>Report List</CardTitle>
            <CardDescription>
              Reports sorted by date
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-4">
                <div className="space-y-4">
                  {filteredReports.map((report) => {
                    const dustbinInfo = getDustbinInfo(report.dustbinId);
                    return (
                      <Card key={report.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center space-x-3">
                                <Badge className={`${getPriorityColor(report.priority)} text-white`}>
                                  {getPriorityText(report.priority)} Priority
                                </Badge>
                                <Badge variant="outline" className={getStatusColor(report.status)}>
                                  {getStatusText(report.status)}
                                </Badge>
                              </div>
                              
                              <div className="space-y-2">
                                <h3 className="font-semibold text-lg">
                                  {report.message}
                                </h3>
                                
                                {dustbinInfo && (
                                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <div className="flex items-center space-x-1">
                                      <MapPin className="h-4 w-4" />
                                      <span>{dustbinInfo.streetName}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <User className="h-4 w-4" />
                                      <span>Worker: {dustbinInfo.assignedWorker}</span>
                                    </div>
                                    {dustbinInfo.workerPhone && (
                                      <div className="flex items-center space-x-1">
                                        <Phone className="h-4 w-4" />
                                        <span>{dustbinInfo.workerPhone}</span>
                                      </div>
                                    )}
                                  </div>
                                )}
                                
                                <div className="text-sm text-gray-500">
                                  {report.timestamp.toLocaleString('en-US')}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex space-x-2">
                              {report.status === 'pending' && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  Mark as Resolved
                                </Button>
                              )}
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                  
                  {filteredReports.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <AlertCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>No reports in this category</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
