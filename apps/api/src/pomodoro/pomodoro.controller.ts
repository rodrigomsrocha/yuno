import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { PomodoroService } from './pomodoro.service';
import { CreateCycleDto } from './dto/start-cycle.dto';

@Controller('pomodoro')
export class PomodoroController {
  constructor(private readonly pomodoroService: PomodoroService) {}

  @Post('cycles/start')
  @HttpCode(201)
  startCycle(@Body() task: CreateCycleDto) {
    return this.pomodoroService.startCycle(task);
  }

  @Get('sessions/active')
  getActiveSession() {
    return this.pomodoroService.getActiveSession();
  }

  @Post('sessions/finish')
  finishSession() {
    return this.pomodoroService.finishCurrentSession();
  }

  @Post('cycles/cancel')
  cancelSession() {
    return this.pomodoroService.cancelActiveCycle();
  }

  @Get('sessions/today')
  getTodaysSessions() {
    return this.pomodoroService.getTodaySessions();
  }
}
