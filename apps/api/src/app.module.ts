import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';

@Module({
  imports: [TasksModule, PomodoroModule],
})
export class AppModule {}
