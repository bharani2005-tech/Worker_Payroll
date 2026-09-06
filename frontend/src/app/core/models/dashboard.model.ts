export interface AdminDashboardCards {
  totalWorkers: number;
  activeWorkers: number;
  totalEarnings: number;
  paidAmount: number;
  pendingAmount: number;
  monthlyExpenses: number;
  productivityScore: number;
}

export interface PayrollTrendPoint {
  _id: { year: number; month: number };
  paid: number;
  due: number;
}

export interface WorkerPerformancePoint {
  workerId: string;
  name: string;
  totalEarnings: number;
  totalTasks: number;
}

export interface DailyStatPoint {
  _id: string; // date string YYYY-MM-DD
  totalEarnings: number;
  entryCount: number;
}

export interface PaymentStatusBreakdownPoint {
  _id: string; // status
  count: number;
  total: number;
}

export interface DepartmentProductivityPoint {
  _id: string; // department
  totalEarnings: number;
  entries: number;
}

export interface AdminDashboardData {
  cards: AdminDashboardCards;
  charts: {
    payrollTrend: PayrollTrendPoint[];
    workerPerformance: WorkerPerformancePoint[];
    dailyStats: DailyStatPoint[];
    paymentStatusBreakdown: PaymentStatusBreakdownPoint[];
    departmentProductivity: DepartmentProductivityPoint[];
  };
  recentActivity: Array<{
    _id: string;
    action: string;
    user: { name: string; role: string } | null;
    timestamp: string;
  }>;
}

export interface WorkerDashboardCards {
  totalDaysWorked: number;
  tasksCompleted: number;
  earnings: number;
  paidAmount: number;
  pendingAmount: number;
}

export interface WorkerDashboardData {
  cards: WorkerDashboardCards;
  tables: {
    workHistory: any[];
    paymentHistory: any[];
  };
  charts: {
    earningsTrend: Array<{ month: string; earnings: number }>;
    taskCompletionTrend: Array<{ date: string; taskCount: number; earnings: number }>;
  };
}

export interface MyAttendanceRecord {
  date: string;
  status: 'present' | 'absent';
  workHours: number;
  taskCount: number;
  earnings: number;
  salaryTypeApplied: 'daily' | 'task' | null;
  remarks: string;
}

export interface MyAttendanceSummary {
  totalDays: number;
  presentCount: number;
  absentCount: number;
  attendanceRate: number;
  totalEarnings: number;
  totalWorkHours: number;
}

export interface MyAttendanceData {
  month: string; // 'YYYY-MM'
  worker: {
    employeeCode: string;
    department: string;
    designation: string;
    salaryType: 'daily' | 'task';
  };
  summary: MyAttendanceSummary;
  records: MyAttendanceRecord[];
}
