// import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsSemVer, IsString } from "class-validator";

export class LoginTutorDto {
    @IsEmail()
    email: string;

    @IsString()
    walletAddress: string; 
    // get address from sign up

}
    