import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateStudentDTO } from 'src/student/dtos/CreateStudentDTO';
import { UpdateProfileDTO } from 'src/student/dtos/UpdateProfileDTO';
import { ProfileService } from 'src/student/services/profile/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  index() {
    //show the profile
  }

  @Post('register')
  async registerAccount(@Body() createStudentDTO: CreateStudentDTO) {
    // return a nonce
    return await this.profileService.createStudent(createStudentDTO);
  }

  @Get('login')
  logIn(@Query('walletAddress') walletAddress: string) {
    // console.log(walletAddress);
    return this.profileService.loginStudent(walletAddress);
  }

  @Post('update/:id')
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfileDTO: UpdateProfileDTO,
  ) {
    return this.profileService.updateStudent(id, { ...updateProfileDTO });
  }
}
