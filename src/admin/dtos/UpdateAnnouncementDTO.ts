import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateAnnouncementDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
