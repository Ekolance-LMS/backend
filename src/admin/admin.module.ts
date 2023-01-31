import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorsController } from './controllers/tutors/tutors.controller';
import { StudentsController } from './controllers/students/students.controller';
import { ProgrammesController } from './controllers/programmes/programmes.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { HackathonsController } from './controllers/hackathons/hackathons.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [
    TutorsController,
    StudentsController,
    ProgrammesController,
    AnnouncementsController,
    HackathonsController,
  ],
  providers: [],
})
export class AdminModule {}
