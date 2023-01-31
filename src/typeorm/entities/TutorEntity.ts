import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AdminEntity } from './AdminEntity';
import { AnnouncementEntity } from './AnnouncementEntity';
import { AssignmentEntity } from './AssignmentEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { ResourceEntity } from './ResourceEntity';

@Entity('tutors')
export class TutorEntity extends BaseEntity {
  @Column({ unique: true, length: 256 })
  walletAddress: string;

  @Column()
  fullName: string;

  @OneToMany(() => ResourceEntity, (resources) => resources.tutor)
  resources: ResourceEntity[];

  @OneToMany(() => ProgrammeEntity, (programme) => programme.tutor)
  programmes: ProgrammeEntity[];

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.tutor)
  assignments: AssignmentEntity[];

  @OneToMany(() => AnnouncementEntity, (announcement) => announcement.tutor)
  announcements: AnnouncementEntity[];

  @ManyToOne(() => AdminEntity, (admin) => admin.tutors)
  admin: AdminEntity;
}
