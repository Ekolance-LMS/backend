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
import { ProfileService } from './services/profile/profile.service'
import { AssignmentsSubmissionController } from './controllers/assignments_submission/assignments_submission.controller';
import { AssignmentEntity } from 'src/typeorm/entities/AssignmentEntity';
import { AssignmentSubmissionEntity } from 'src/typeorm/entities/AssignmentSubmissionEntity';
import { ResourceEntity } from 'src/typeorm/entities/ResourceEntity';
import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
import { ProfileController } from './controllers/profile/profile.controller';
import { TutorEntity } from 'src/typeorm/entities/TutorEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AssignmentEntity,
      AssignmentSubmissionEntity,
      ResourceEntity,
      AnnouncementEntity,
      StudentEntity,
      TutorEntity,
    ]),
  ],
  controllers: [
    AssignmentsController,
    AssignmentsSubmissionController,
    ResourcesController,
    StudentsController,
    AnnouncementsController,
    ProfileController,
  ],
  providers: [
    AssignmentsSubmissionService,
    AssignmentsService,
    AnnouncementsService,
    ResourcesService,
    StudentsService,
    ProfileService,
  ],
})
export class TutorModule {}
