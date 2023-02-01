import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAnnouncementDTO {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  @IsNotEmpty()
  programmeId: number;

  @IsNumber()
  @IsEmpty()
  tutorId: number;

  @IsNumber()
  @IsEmpty()
  adminId: number;
}
