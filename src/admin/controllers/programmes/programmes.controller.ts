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
import { CreateProgrammeDTO } from 'src/admin/dtos/CreateProgrammeDTO';
import { UpdateProgrammeDTO } from 'src/admin/dtos/UpdateProgrammeDTO';
import { ProgrammesService } from 'src/admin/services/programmes/programmes.service';
import { ProgrammeEntity } from 'src/typeorm/entities/ProgrammeEntity';

@Controller('programmes')
export class ProgrammesController {
  constructor(private ProgrammeService: ProgrammesService) {}

  @Get()
  @ApiOkResponse({ status: 200, type: ProgrammeEntity, isArray: true })
  getAllProgrammes() {
    return this.ProgrammeService.getAllProgrammes();
  }

  @Post('create')
  async createProgramme(@Body() createProgrammeDTO: CreateProgrammeDTO) {
    // console.log(createProgrammeDTO);
    return await this.ProgrammeService.createProgramme({
      ...createProgrammeDTO,
    });
  }

  @Put('update/:id')
  updateProgramme(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProgrammeDTO: UpdateProgrammeDTO,
  ) {
    return this.ProgrammeService.updateProgramme(id, {
      ...updateProgrammeDTO,
    });
  }

  @Delete('delete/:id')
  deleteProgramme(@Param('id', ParseIntPipe) id: number) {
    this.ProgrammeService.deleteProgramme(id);
  }
}
