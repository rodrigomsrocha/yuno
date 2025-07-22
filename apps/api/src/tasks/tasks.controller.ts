import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from 'shared';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @HttpCode(201)
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Get()
  @HttpCode(200)
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  @HttpCode(200)
  getTaskById(@Param('id') id: string): Promise<Task | undefined> {
    // Logic to retrieve a task by ID
    return this.tasksService.getTaskById(id) as Promise<Task | undefined>;
  }

  @Put(':id')
  @HttpCode(204)
  updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    // Logic to update a task by ID
    return this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTask(@Param('id') id: string) {
    // Logic to delete a task by ID
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id/status')
  @HttpCode(204)
  updateTaskStatus(@Param('id') id: string, @Body() task: UpdateTaskStatusDto) {
    // Logic to update a task status by ID
    return this.tasksService.updateTaskStatus(id, task);
  }
}
