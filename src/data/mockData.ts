
import { Dustbin, Report } from '../types/dustbin';

export const mockDustbins: Dustbin[] = [
  {
    id: '1',
    streetName: 'Anna Nagar 1st Street',
    location: 'Anna Nagar',
    fillingLevel: 85,
    lastUpdated: new Date(),
    status: 'warning',
    assignedWorker: 'Rajan',
    workerPhone: '9876543210',
    image: 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    streetName: 'Gandipan Nagar 2nd Street',
    location: 'Gandipan Nagar',
    fillingLevel: 45,
    lastUpdated: new Date(),
    status: 'normal',
    assignedWorker: 'Murugan',
    workerPhone: '9876543211',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    streetName: 'Gandhi Nagar 3rd Street',
    location: 'Gandhi Nagar',
    fillingLevel: 95,
    lastUpdated: new Date(),
    status: 'critical',
    assignedWorker: 'Kumar',
    workerPhone: '9876543212',
    image: 'https://images.unsplash.com/photo-1567393956979-86e2abb2b6c6?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    streetName: 'Nehru Nagar 4th Street',
    location: 'Nehru Nagar',
    fillingLevel: 60,
    lastUpdated: new Date(),
    status: 'normal',
    assignedWorker: 'Suresh',
    workerPhone: '9876543213',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop'
  }
];

export const mockReports: Report[] = [
  {
    id: '1',
    dustbinId: '1',
    userId: 'user1',
    message: 'Dustbin is overflowing',
    timestamp: new Date(),
    status: 'pending',
    priority: 'high'
  },
  {
    id: '2',
    dustbinId: '3',
    userId: 'user2',
    message: 'Bad smell coming from the bin',
    timestamp: new Date(),
    status: 'resolved',
    priority: 'medium'
  }
];
