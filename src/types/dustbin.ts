
export interface Dustbin {
  id: string;
  streetName: string;
  location: string;
  fillingLevel: number; // 0-100 percentage
  lastUpdated: Date;
  status: 'normal' | 'warning' | 'critical' | 'overflow';
  assignedWorker?: string;
  workerPhone?: string;
  image: string;
}

export interface Report {
  id: string;
  dustbinId: string;
  userId: string;
  message: string;
  timestamp: Date;
  status: 'pending' | 'resolved';
  priority: 'low' | 'medium' | 'high';
}
