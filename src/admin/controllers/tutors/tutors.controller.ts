import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateTutorDTO } from 'src/admin/dtos/CreateTutorDTO';
import { UpdateTutorDTO } from 'src/admin/dtos/UpdateTutorDTO';
import { TutorsService } from 'src/admin/services/tutors/tutors.service';
import { TutorEntity } from '../../../typeorm/entities/TutorEntity';

@Controller('tutors')
export class TutorsController {
  constructor(private tutorService: TutorsService) {}

  @Get()
  @ApiOkResponse({ status: 200, type: TutorEntity, isArray: true })
  getAllTutors() {
    return this.tutorService.getAllTutors();
  }

  @Post('create')
  async addTutor(@Body() createTutorDTO: CreateTutorDTO) {
    return await this.tutorService.addTutor({
      ...createTutorDTO,
    });
  }

  @Put('update/:id')
  updateTutor(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTutorDTO: UpdateTutorDTO,
  ) {
    return this.tutorService.updateTutor(id, {
      ...updateTutorDTO,
    });
  }

  @Delete('delete/:id')
  deleteTutor(@Param('id', ParseIntPipe) id: number) {
    this.tutorService.delete_tutor(id);
  }

  @Post('loginTutor')
  @HttpCode(200)
  loginTutor(@Param('walletAddress') walletAddress: string) {
    this.tutorService.loginTutor(walletAddress);
  }
}
