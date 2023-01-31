import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorsController } from './controllers/tutors/tutors.controller';
import { StudentsController } from './controllers/students/students.controller';
import { ProgrammesController } from './controllers/programmes/programmes.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { HackathonsController } from './controllers/hackathons/hackathons.controller';
import { AnnouncementsService } from './services/announcements/announcements.service';
import { HackathonsService } from './services/hackathons/hackathons.service';
import { ProgrammesService } from './services/programmes/programmes.service';
import { StudentsService } from './services/students/students.service';
import { TutorsService } from './services/tutors/tutors.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [
    TutorsController,
    StudentsController,
    ProgrammesController,
    AnnouncementsController,
    HackathonsController,
  ],
  providers: [
    AnnouncementsService,
    HackathonsService,
    ProgrammesService,
    StudentsService,
    TutorsService,
  ],
})
export class AdminModule {}
