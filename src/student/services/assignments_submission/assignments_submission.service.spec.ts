import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentsSubmissionService } from './assignments_submission.service';

describe('AssignmentsSubmissionService', () => {
  let service: AssignmentsSubmissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignmentsSubmissionService],
    }).compile();

    service = module.get<AssignmentsSubmissionService>(AssignmentsSubmissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
