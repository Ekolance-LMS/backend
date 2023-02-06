import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsUrl, IsDate, IsEnum } from 'class-validator';
import { ProgrammeStatus } from 'src/utils/enums';

export class UpdateProgrammeDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  linkToFlier: string;

  @IsDate()
  @Type(() => Date)
  applicationDeadline: Date;

  @IsEnum(ProgrammeStatus)
  status: ProgrammeStatus;
}
