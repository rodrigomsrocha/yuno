import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { TaskStatus } from 'shared';
import { PrismaService } from 'src/prisma/prisma.service';
import { TasksService } from 'src/tasks/tasks.service';
import { CreateCycleDto } from './dto/start-cycle.dto';

@Injectable()
export class PomodoroService {
  constructor(
    private tasksService: TasksService,
    private prismaService: PrismaService,
  ) {}

  async startCycle(task: CreateCycleDto) {
    const existingSession = await this.getActiveSession();

    if (existingSession) {
      throw new NotFoundException(
        `Active session already exists for task ID ${task.taskId}`,
      );
    }

    const foundedTask = await this.tasksService.getTaskById(task.taskId);

    if (!foundedTask) {
      throw new NotFoundException(`Task with ID ${task.taskId} not found`);
    }

    if (foundedTask.status !== TaskStatus.DOING) {
      throw new ForbiddenException(
        `Task with ID ${task.taskId} is not in 'doing' status`,
      );
    }

    await this.prismaService.pomodoroCycle.create({
      data: {
        taskId: task.taskId,
        currentRound: 1,
        PomodoroSession: {
          create: {
            round: 1,
            status: 'active',
            type: 'focus',
          },
        },
      },
    });
  }

  async getActiveSession() {
    const session = await this.prismaService.pomodoroSession.findFirst({
      where: {
        status: 'active',
      },
    });

    if (!session) return null;

    return session;
  }

  async finishCurrentSession() {
    const activeSession = await this.getActiveSession();

    if (!activeSession) {
      throw new NotFoundException('No active session to finish');
    }

    const currentCycle = await this.prismaService.pomodoroCycle.findUnique({
      where: { id: activeSession.cycleId },
    });

    await this.prismaService.pomodoroSession.update({
      where: { id: activeSession.id },
      data: { status: 'completed', endTime: new Date() },
    });

    let nextSessionType = '';
    let shouldEndCycle = false;
    let nextRound = currentCycle?.currentRound || 1;

    if (activeSession.type === 'focus') {
      nextSessionType = activeSession.round < 4 ? 'short_break' : 'long_break';
    } else if (activeSession.type === 'short_break') {
      nextSessionType = 'focus';
      nextRound += 1;
    } else {
      shouldEndCycle = true;
    }

    if (shouldEndCycle) {
      await this.prismaService.pomodoroCycle.update({
        where: { id: activeSession.cycleId },
        data: {
          isCompleted: true,
          endTime: new Date(),
        },
      });
      return { message: 'Cycle completed' };
    }

    await this.prismaService.pomodoroCycle.update({
      where: { id: activeSession.cycleId },
      data: {
        currentRound: nextRound,
        PomodoroSession: {
          create: {
            type: nextSessionType,
            round: nextRound,
            status: 'active',
            startTime: new Date(),
          },
        },
      },
    });

    return {
      message: 'Session finished, next started',
      nextType: nextSessionType,
    };
  }

  async cancelActiveCycle() {
    const activeSession = await this.getActiveSession();

    if (!activeSession) {
      throw new NotFoundException('No active session to cancel');
    }

    const endTime = new Date();

    await this.prismaService.pomodoroSession.update({
      where: { id: activeSession.id },
      data: { status: 'cancelled', endTime },
    });

    await this.prismaService.pomodoroCycle.update({
      where: { id: activeSession.cycleId },
      data: { isCompleted: true, endTime },
    });

    return { message: 'Active session and cycle cancelled' };
  }

  async getTodaySessions() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.prismaService.pomodoroSession.findMany({
      where: {
        startTime: {
          gte: today,
        },
      },
      orderBy: {
        startTime: 'desc',
      },
    });
  }
}
