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
  import { CreateHackathonDTO } from 'src/admin/dtos/CreateHackathonDTO';
  import { UpdateHackathonDTO } from 'src/admin/dtos/UpdateHackathonDTO';
  import { HackathonsService } from 'src/admin/services/hackathons/hackathons.service';
  import { HackathonsEntity } from 'src/typeorm/entities/HackathonsEntity';
  //import { ProgrammeEntity } from 'src/typeorm/entities/ProgrammeEntity';
  
  @Controller('Hackathon')
  export class HackathonController {
    constructor(private HackathonService: HackathonsService) {}
  
    @Get()
    @ApiOkResponse({ status: 200, type: HackathonsEntity, isArray: true })
    getAllHackathon() {
      return this.HackathonService.getAllHackathons();
    }
  
    @Post('create')
    async createHackathons(@Body() CreateHackathonDTO: CreateHackathonDTO) {
      // console.log(CreatehackathonDTO);
      return await this.HackathonService.createHackathons({
        ...CreateHackathonDTO,
      });
    }
  
    @Put('update/:id')
    updateHackathon(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateHackathons: UpdateHackathonDTO,
    ) {
      return this.HackathonService.updateHackathons(id, {
        ...updateHackathons,
      });
    }
  
    @Delete('delete/:id')
    deletehackathon(@Param('id', ParseIntPipe) id: number): void {
      this.HackathonService.deleteHackathons(id);
    }
  }
  