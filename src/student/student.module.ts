import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourcesController } from './controllers/resources/resources.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { AssignmentsController } from './controllers/assignments/assignments.controller';
import { AssignmentsSubmissionController } from './controllers/assignments_submission/assignments_submission.controller';
import { ProfileController } from './controllers/profile/profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature()],
  controllers: [ResourcesController, AnnouncementsController, AssignmentsController, AssignmentsSubmissionController, ProfileController],
  providers: [],
})
export class StudentModule {}
