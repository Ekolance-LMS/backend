import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('assignment_submissions')
export class AssignmentSubmissionEntity extends BaseEntity {
  @Column()
  submissionDate: Date;

  @Column()
  link: string;

  // Set up relations with student, programme/cohort
}
