import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsUrl,
} from 'class-validator';
import { HackathonsStatus } from 'src/utils/enums';

export class UpdateHackathonDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsUrl()
  linkToHackathon: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  applicationDeadline: Date;

  @ApiProperty()
  @IsEnum(HackathonsStatus)
  status: HackathonsStatus;
}
