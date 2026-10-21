/**
 * Shared TypeScript Types
 */

export interface User {
  id: string;
  phone: string;
  name: string;
  age?: number;
  weight?: number;
  height?: number;
  gender?: 'male' | 'female' | 'other';
  trainingExperience?: 'beginner' | 'intermediate' | 'advanced';
  goal?: string;
  role: 'student' | 'coach';
  createdAt: string;
  updatedAt: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in months
  includesNutrition: boolean;
  features: string[];
}

export interface Payment {
  id: string;
  userId: string;
  packageId: string;
  amount: number;
  type: 'initial' | 'final';
  status: 'pending' | 'paid' | 'failed';
  transactionId?: string;
  createdAt: string;
  paidAt?: string;
}

export interface Program {
  id: string;
  userId: string;
  coachId: string;
  status: 'preparing' | 'ready' | 'sent';
  fileUrl?: string;
  uploadedAt?: string;
  createdAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderType: 'student' | 'coach';
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  studentId: string;
  coachId: string;
  studentName: string;
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: string;
}

export interface StudentProfile {
  user: User;
  package?: Package;
  initialPayment: Payment | null;
  finalPayment: Payment | null;
  program: Program | null;
}

