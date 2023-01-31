import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { AdminEntity } from './typeorm/entities/AdminEntity';
import { AnnouncementEntity } from './typeorm/entities/AnnouncementEntity';
import { AssignmentEntity } from './typeorm/entities/AssignmentEntity';
import { AssignmentSubmissionEntity } from './typeorm/entities/AssignmentSubmissionEntity';
import { ProgrammeEntity } from './typeorm/entities/ProgrammeEntity';
import { ResourceEntity } from './typeorm/entities/ResourceEntity';
import { StudentEntity } from './typeorm/entities/StudentEntity';
import { TutorEntity } from './typeorm/entities/TutorEntity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'ekolance_lms',
      entities: [
        AdminEntity,
        AnnouncementEntity,
        AssignmentEntity,
        AssignmentSubmissionEntity,
        ProgrammeEntity,
        ResourceEntity,
        StudentEntity,
        TutorEntity,
      ],
      synchronize: true,
    }),
    AdminModule,
    StudentModule,
    TutorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
