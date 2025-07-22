import { Module } from '@nestjs/common';
import { PomodoroController } from './pomodoro.controller';
import { PomodoroService } from './pomodoro.service';
import { TasksService } from 'src/tasks/tasks.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PomodoroController],
  providers: [PomodoroService, TasksService, PrismaService],
})
export class PomodoroModule {}
