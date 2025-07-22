export enum TaskStatus {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done',
}

export enum PomodoroSessionType {
  FOCUS = 'focus',
  SHORT_BREAK = 'short_break',
  LONG_BREAK = 'long_break',
}

export enum PomodoroSessionStatus {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export interface PomodoroCycle {
  id: string;
  taskId: string;
  currentRound: number;
  isCompleted: boolean;
  startTime: Date;
  endTime: Date | null;
}

export interface PomodoroSession {
  id: string;
  cycleId: string;
  type: PomodoroSessionType;
  round: number;
  startTime: Date;
  endTime: Date | null;
  status: PomodoroSessionStatus;
}

export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}
