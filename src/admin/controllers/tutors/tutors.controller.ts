import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { ApiOkResponse } from '@nestjs/swagger';
  import { CreateTutorDTO } from 'src/admin/dtos/CreateTutorDTO';
  import { UpdateTutorDTO } from 'src/admin/dtos/UpdateTutorDTO';
  import { TutorsService } from 'src/admin/services/tutors/tutors.service';
  import { TutorEntity } from 'src/typeorm/entities/tutorEntity';

@Controller('tutors')
export class TutorsController {
    constructor(private tutorService: TutorsService) {}

    @Get()
    @ApiOkResponse({ status: 200, type: TutorEntity, isArray: true })
    getAllTutors() {
      return this.tutorService.getAllTutors()
    }

    @Post('create')
    async addtutor(
      @Body() createTutorDTO: CreateTutorDTO,
    ) {
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
}
