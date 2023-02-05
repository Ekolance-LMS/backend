import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { StudentEntity } from './StudentEntity';

export enum STATUS {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

@Entity('programme_applications')
export class ProgrammeApplicationEntity extends BaseEntity {
  @Column({ type: 'enum', enum: STATUS, default: STATUS.PENDING })
  applicationStatus: STATUS;

  @ManyToOne(() => StudentEntity, (students) => students.applications)
  student: StudentEntity;

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.applications)
  programme: ProgrammeEntity;
}
