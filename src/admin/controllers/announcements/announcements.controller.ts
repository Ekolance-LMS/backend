import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAnnouncementDTO } from 'src/admin/dtos/CreateAnnouncementDTO';
import { UpdateAnnouncementDTO } from 'src/admin/dtos/UpdateAnnouncementDTO';
import { AnnouncementsService } from 'src/admin/services/announcements/announcements.service';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private announcementService: AnnouncementsService) {}

  @Get()
  getAllAnnouncements() {
    return this.announcementService.getAllAnnouncements();
  }

  @Post('create')
  async createAnnouncement(
    @Body() createAnnouncementDTO: CreateAnnouncementDTO,
  ) {
    return await this.announcementService.createAnnouncement({
      ...createAnnouncementDTO,
    });
  }

  @Put('update/:id')
  updateAnnouncement(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAnnouncementDTO: UpdateAnnouncementDTO,
  ) {
    this.announcementService.updateAnnouncement(id, {
      ...updateAnnouncementDTO,
    });
  }
}
