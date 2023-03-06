// import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { ProfileService } from "src/tutor/services/profile/profile.service";

export class LoginTutorDto {

    @IsString()
    walletAddress: string; 
    // get address from sign up
}
    