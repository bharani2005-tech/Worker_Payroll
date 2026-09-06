import { User } from './user.model';

export type SalaryType = 'daily' | 'task';
export type PaymentStatus = 'paid' | 'unpaid' | 'partial';
export type PaymentMethod = 'cash' | 'bank_transfer' | 'upi' | 'cheque';

export interface Worker {
  _id: string;
  user: User;
  employeeCode: string;
  joiningDate: string;
  department: string;
  designation: string;
  salaryType: SalaryType;
  taskRate: number;
  dailyRate: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkerPayload {
  name: string;
  email: string;
  password: string;
  phone?: string;
  employeeCode: string;
  joiningDate?: string;
  department: string;
  designation: string;
  salaryType: SalaryType;
  taskRate?: number;
  dailyRate?: number;
}

export interface UpdateWorkerPayload {
  department?: string;
  designation?: string;
  salaryType?: SalaryType;
  taskRate?: number;
  dailyRate?: number;
  isActive?: boolean;
}

export interface WorkEntry {
  _id: string;
  worker: Worker | string;
  date: string;
  taskCount: number;
  workHours: number;
  rateApplied: number;
  salaryTypeApplied: SalaryType;
  earnings: number;
  remarks?: string;
  createdAt: string;
}

export interface CreateWorkEntryPayload {
  workerId: string;
  date: string;
  taskCount?: number;
  workHours?: number;
  remarks?: string;
}

export interface Payment {
  _id: string;
  worker: Worker | string;
  paymentDate: string;
  periodStart: string;
  periodEnd: string;
  amountDue: number;
  amountPaid: number;
  pendingAmount: number;
  status: PaymentStatus;
  paymentMethod?: PaymentMethod;
  notes?: string;
  createdAt: string;
}

export interface GeneratePayrollPayload {
  workerId: string;
  periodStart: string;
  periodEnd: string;
}

export interface MarkPaymentPayload {
  amountPaid?: number;
  paymentMethod?: PaymentMethod;
  notes?: string;
}

export interface AppNotification {
  _id: string;
  user: string;
  title: string;
  message: string;
  type: 'payment' | 'work_entry' | 'payroll' | 'announcement' | 'system';
  isRead: boolean;
  createdAt: string;
}
