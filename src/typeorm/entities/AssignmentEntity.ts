import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('assignments')
export class AssignmentEntity extends BaseEntity {
  @Column()
  deadline: Date;

  @Column()
  link: string;

  // Set up relations with programme, tutor
}
