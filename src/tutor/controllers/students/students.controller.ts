import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { StudentsService } from 'src/tutor/services/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @Get(':programmeId')
  getAllStudents(@Param('programmeId', ParseIntPipe) programmeId: number) {
    return this.studentService.getAllStudents(programmeId);
  }
}
