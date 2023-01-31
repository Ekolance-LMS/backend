import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentsController } from './controllers/assignments/assignments.controller';
import { ResourcesController } from './controllers/resources/resources.controller';
import { StudentsController } from './controllers/students/students.controller';
import { AnnouncementsController } from './controllers/announcements/announcements.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [AssignmentsController, ResourcesController, StudentsController, AnnouncementsController],
  providers: [],
})
export class TutorModule {}
