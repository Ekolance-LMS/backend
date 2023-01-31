import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentsSubmissionController } from './assignments_submission.controller';

describe('AssignmentsSubmissionController', () => {
  let controller: AssignmentsSubmissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignmentsSubmissionController],
    }).compile();

    controller = module.get<AssignmentsSubmissionController>(AssignmentsSubmissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
