import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentsController } from './controllers/assignments/assignments.controller';
import { ResourcesController } from './controllers/resources/resources.controller';
import { StudentsController } from './controllers/students/students.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';
import { AssignmentsSubmissionService } from './services/assignments_submission/assignments_submission.service';
import { AssignmentsService } from './services/assignments/assignments.service';
import { AnnouncementsService } from './services/announcements/announcements.service';
import { ResourcesService } from './services/resources/resources.service';
import { StudentsService } from './services/students/students.service';
import { AssignmentsSubmissionService } from './controllers/assignments_submission/assignments_submission.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [AssignmentsController, ResourcesController, StudentsController, AnnouncementsController],
  providers: [AssignmentsSubmissionService, AssignmentsService, AnnouncementsService, ResourcesService, StudentsService],
})
export class TutorModule {}
