import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourcesController } from './controllers/resources/resources.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { AssignmentsController } from './controllers/assignments/assignments.controller';
import { AssignmentsSubmissionController } from './controllers/assignments_submission/assignments_submission.controller';
import { ProfileController } from './controllers/profile/profile.controller';
import { AnnouncementsService } from './services/announcements/announcements.service';
import { AssignmentsService } from './services/assignments/assignments.service';
import { ProfileService } from './services/profile/profile.service';
import { ResourcesService } from './services/resources/resources.service';
import { AssignmentsSubmissionService } from './services/assignments_submission/assignments_submission.service';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [
    ResourcesController,
    AnnouncementsController,
    AssignmentsController,
    AssignmentsSubmissionController,
    ProfileController,
  ],
  providers: [
    AnnouncementsService,
    AssignmentsService,
    ProfileService,
    ResourcesService,
    AssignmentsSubmissionService,
  ],
})
export class StudentModule {}
