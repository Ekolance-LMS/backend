import { Controller, Get } from '@nestjs/common';
import { AnnouncementsService } from 'src/student/services/announcements/announcements.service';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private announcementService: AnnouncementsService) {}

  @Get()
  showAnnouncements() {
    return this.announcementService.getAnnouncementsForStudent();
  }
}
