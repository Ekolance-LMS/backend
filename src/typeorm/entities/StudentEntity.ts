import { Column, Entity, OneToMany } from 'typeorm';
import { AssignmentSubmissionEntity } from './AssignmentSubmissionEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';

@Entity('students')
export class StudentEntity extends BaseEntity {
  @Column({ unique: true, length: 256 })
  walletAddress: string;

  @Column()
  fullName: string;

  @OneToMany(
    () => AssignmentSubmissionEntity,
    (submittedAssignment) => submittedAssignment.student,
  )
  submittedAssignments: AssignmentSubmissionEntity[];

  @OneToMany(() => ProgrammeEntity, (programme) => programme.student)
  programmes: ProgrammeEntity[];
}
