import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

export enum Status {
  UPCOMING = 'upcoming',
  ONGOING = 'ongoing',
  ENDED = 'ended',
}

@Entity({ name: 'programmes' })
export class ProgrammeEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ type: 'enum', enum: Status, default: Status.UPCOMING })
  status: Status;

  //   Add relationship for tutor, student, assignment, resources
}
