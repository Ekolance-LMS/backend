import { IsEmail, IsString } from 'class-validator';

export class UpdateTutorDTO {
  @IsEmail()
  email: string;

  @IsString()
  fullName: string;

  @IsString()
  Programme: string;

  @IsString()
  Cohort: string;
}
