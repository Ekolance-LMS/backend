import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileDTO {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
