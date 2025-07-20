import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from 'shared';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsEnum(TaskStatus as object)
  status?: TaskStatus;
}
