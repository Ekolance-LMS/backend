import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AssignmentsSubmissionService } from 'src/tutor/services/assignments_submission/assignments_submission.service';

@Controller()
export class AssignmentsSubmissionController {
  constructor(
    private assignmentsSubmissionService: AssignmentsSubmissionService,
  ) {}

  @Get(':assignmentId')
  getSubmissions(@Param('assignmentId', ParseIntPipe) assignmentId: number) {
    this.assignmentsSubmissionService.getSubmittedAssignments(assignmentId);
  }
}
