import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from 'shared';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async createTask(task: CreateTaskDto) {
    return await this.prisma.task.create({
      data: {
        ...task,
      },
    });
  }

  async getTasks(): Promise<Task[]> {
    return (await this.prisma.task.findMany()) as Task[];
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.prisma.task.findFirst({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task as Task;
  }

  async updateTask(id: string, task: UpdateTaskDto) {
    await this.getTaskById(id);

    return await this.prisma.task.update({
      where: { id },
      data: {
        ...task,
      },
    });
  }

  async deleteTask(id: string) {
    await this.getTaskById(id);

    return await this.prisma.task.delete({
      where: { id },
    });
  }

  async updateTaskStatus(id: string, task: UpdateTaskStatusDto) {
    await this.getTaskById(id);

    return await this.prisma.task.update({
      where: { id },
      data: {
        status: task.status,
      },
    });
  }
}
