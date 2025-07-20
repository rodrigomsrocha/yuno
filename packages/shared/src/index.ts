export enum TaskStatus {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done',
}

export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}
