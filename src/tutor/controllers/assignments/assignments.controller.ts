import { Controller } from '@nestjs/common';
import { AssignmentsService } from 'src/tutor/services/assignments/assignments.service';

@Controller('assignments')
export class AssignmentsController {
  constructor(private assignmentsService: AssignmentsService) {}
}
