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
import { ResourceEntity } from 'src/typeorm/entities/ResourceEntity';
import { AnnouncementEntity } from 'src/typeorm/entities/AnnouncementEntity';
import { AssignmentEntity } from 'src/typeorm/entities/AssignmentEntity';
import { AssignmentSubmissionEntity } from 'src/typeorm/entities/AssignmentSubmissionEntity';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ResourceEntity,
      AnnouncementEntity,
      AssignmentEntity,
      AssignmentSubmissionEntity,
      StudentEntity,
    ]),
  ],
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
