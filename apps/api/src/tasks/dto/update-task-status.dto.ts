import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from 'shared';

export class UpdateTaskStatusDto {
  @IsNotEmpty()
  @IsEnum(TaskStatus as object)
  status: TaskStatus;
}
