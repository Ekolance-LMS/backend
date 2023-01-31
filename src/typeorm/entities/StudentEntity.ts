import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('students')
export class StudentEntity extends BaseEntity {
  @Column({ unique: true, length: 256 })
  walletAddress: string;

  @Column()
  fullName: string;

  // Add relations for assignment submissions, cohort/programmes
}
