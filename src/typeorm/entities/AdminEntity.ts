import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('admins')
export class AdminEntity extends BaseEntity {
  @Column({ unique: true, length: 256 })
  walletAddress: string;

  @Column()
  fullName: string;

  //Add relationship for tutor, student, programme/cohort, notices
}
