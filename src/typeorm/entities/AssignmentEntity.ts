import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { TutorEntity } from './TutorEntity';

@Entity('assignments')
export class AssignmentEntity extends BaseEntity {
  @Column()
  deadline: Date;

  @Column()
  link: string;

  @ManyToOne(() => TutorEntity, (tutor) => tutor.assignments)
  tutor: TutorEntity;

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.assignments)
  programme: ProgrammeEntity;
}
