
import React from 'react';
import { Dustbin } from '../types/dustbin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { Phone, MapPin, Clock } from 'lucide-react';

interface DustbinCardProps {
  dustbin: Dustbin;
  onReport?: (dustbinId: string) => void;
}

const DustbinCard: React.FC<DustbinCardProps> = ({ dustbin, onReport }) => {
  const { user } = useAuth();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      case 'overflow': return 'bg-red-700';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'normal': return 'Normal';
      case 'warning': return 'Warning';
      case 'critical': return 'Critical';
      case 'overflow': return 'Overflowing';
      default: return 'Unknown';
    }
  };

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <img 
          src={dustbin.image} 
          alt={dustbin.streetName}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge 
          className={`absolute top-2 right-2 ${getStatusColor(dustbin.status)} text-white`}
        >
          {getStatusText(dustbin.status)}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {dustbin.streetName}
        </CardTitle>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          {dustbin.location}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Fill Level:</span>
            <span className="font-medium">{dustbin.fillingLevel}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getStatusColor(dustbin.status)}`}
              style={{ width: `${dustbin.fillingLevel}%` }}
            />
          </div>
        </div>

        {(user?.role === 'head' || user?.role === 'worker') && dustbin.assignedWorker && (
          <div className="space-y-1 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Assigned Worker:</span>
              <span className="font-medium">{dustbin.assignedWorker}</span>
            </div>
            {dustbin.workerPhone && (
              <div className="flex items-center justify-between">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="font-mono text-sm">{dustbin.workerPhone}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center text-xs text-gray-500">
          <Clock className="h-3 w-3 mr-1" />
          Last updated: {dustbin.lastUpdated.toLocaleTimeString('en-US')}
        </div>

        {user?.role === 'user' && onReport && (
          <Button 
            onClick={() => onReport(dustbin.id)}
            variant="outline" 
            size="sm" 
            className="w-full mt-3 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
          >
            Report Issue
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DustbinCard;
