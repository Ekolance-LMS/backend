import { Column, Entity, OneToMany } from 'typeorm';
import { AnnouncementEntity } from './AnnouncementEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { TutorEntity } from './TutorEntity';

@Entity('admins')
export class AdminEntity extends BaseEntity {
  @Column({ unique: true, length: 256 })
  walletAddress: string;

  @Column()
  fullName: string;

  @OneToMany(() => AnnouncementEntity, (announcement) => announcement.admin)
  announcements: AnnouncementEntity[];

  @OneToMany(() => ProgrammeEntity, (programme) => programme.admin)
  programmes: ProgrammeEntity[];

  @OneToMany(() => TutorEntity, (tutor) => tutor.admin)
  tutors: TutorEntity[];
}
