import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
  } from '@nestjs/common';
  // import { LoginTutorDto } from 'src/tutor/dtos/LoginDTO';
  import { ProfileService } from 'src/tutor/services/profile/profile.service';
  
  @Controller('profile')
  export class ProfileController {
    constructor(private profileService: ProfileService) {}
  
    @Get()
    index() {
      this.logIn;
    }
  
    @Post('login')
    logIn(
       // @Body() LoginTutorDto : LoginTutorDto,
        @Query('walletAddress') walletAddress: string) {
            // console.log(walletAddress);
            return this.profileService.loginTutor(walletAddress);
    }
  
    // @Post('update/:id')
    // updateProfile(
    //   @Param('id', ParseIntPipe) id: number,
    //   @Body() updateTutorDTO: UpdateTutorDTO,
    // ) {
    //   return this.profileService.updateStudent(id, { ...updateProfileDTO });
    // }
}
  