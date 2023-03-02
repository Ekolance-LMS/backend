import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { AssignmentSubmissionEntity } from './AssignmentSubmissionEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeApplicationEntity } from './ProgrammeApplicationEntity';
import { ProgrammeEntity } from './ProgrammeEntity';

@Entity('students')
export class StudentEntity extends BaseEntity {
  @Column({ unique: true, length: 50 })
  walletAddress: string;

  @Column({ unique: true, nullable: true, type: 'bigint' })
  nonce: number;

  @Column({ unique: true, nullable: true })
  fullName: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @OneToMany(
    () => AssignmentSubmissionEntity,
    (submittedAssignment) => submittedAssignment.student,
  )
  submittedAssignments: AssignmentSubmissionEntity[];

  @OneToMany(
    () => ProgrammeApplicationEntity,
    (application) => application.student,
  )
  applications: ProgrammeApplicationEntity[];

  @ManyToMany(() => ProgrammeEntity)
  @JoinTable()
  programmes: ProgrammeEntity[];
}
