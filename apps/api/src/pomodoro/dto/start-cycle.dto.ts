import { IsNotEmpty } from 'class-validator';

export class CreateCycleDto {
  @IsNotEmpty()
  taskId: string;
}
