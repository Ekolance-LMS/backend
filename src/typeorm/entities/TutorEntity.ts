import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('tutors')
export class TutorEntity extends BaseEntity {
  @Column({ unique: true, length: 256 })
  walletAddress: string;

  @Column()
  fullName: string;

  // Add relations for programmes, assignments, resources, notices
}
