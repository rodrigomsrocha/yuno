import { Injectable } from '@nestjs/common';
import { Task } from 'shared';

@Injectable()
export class AppService {
  getHello(): string {
    const example: Task = {
      id: '1',
      title: 'Estudar NestJS',
      status: 'todo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return `Tarefa: ${example.title}`;
  }
}
