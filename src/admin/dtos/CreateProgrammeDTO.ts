import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ProgrammeStatus } from 'src/utils/enums';

export class CreateProgrammeDTO {
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

  @ApiProperty()
  @IsOptional()
  adminId: number;
}
