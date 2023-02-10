import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateStudentDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;
}
