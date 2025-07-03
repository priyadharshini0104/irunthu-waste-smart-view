
import { Dustbin, Report } from '../types/dustbin';

export const mockDustbins: Dustbin[] = [
  {
    id: '1',
    streetName: 'அண்ணா நகர் முதல் தெரு',
    location: 'அண்ணா நகர்',
    fillingLevel: 85,
    lastUpdated: new Date(),
    status: 'warning',
    assignedWorker: 'ராஜன்',
    workerPhone: '9876543210',
    image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    streetName: 'கண்டீபன் நகர் இரண்டாம் தெரு',
    location: 'கண்டீபன் நகர்',
    fillingLevel: 45,
    lastUpdated: new Date(),
    status: 'normal',
    assignedWorker: 'முருகன்',
    workerPhone: '9876543211',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    streetName: 'காந்தி நகர் மூன்றாம் தெரு',
    location: 'காந்தி நகர்',
    fillingLevel: 95,
    lastUpdated: new Date(),
    status: 'critical',
    assignedWorker: 'குமார்',
    workerPhone: '9876543212',
    image: 'https://images.unsplash.com/photo-1567393956979-86e2abb2b6c6?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    streetName: 'நேரு நகர் நான்காம் தெரு',
    location: 'நேரு நகர்',
    fillingLevel: 60,
    lastUpdated: new Date(),
    status: 'normal',
    assignedWorker: 'சுரேஷ்',
    workerPhone: '9876543213',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop'
  }
];

export const mockReports: Report[] = [
  {
    id: '1',
    dustbinId: '1',
    userId: 'user1',
    message: 'குப்பைத் தொட்டி நிரம்பி வழிகிறது',
    timestamp: new Date(),
    status: 'pending',
    priority: 'high'
  },
  {
    id: '2',
    dustbinId: '3',
    userId: 'user2',
    message: 'துர்நாற்றம் வீசுகிறது',
    timestamp: new Date(),
    status: 'resolved',
    priority: 'medium'
  }
];
