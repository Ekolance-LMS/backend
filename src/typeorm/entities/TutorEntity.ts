import { BeforeInsert, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
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

  @Column({nullable: true })
  fullName: string;

  @Column({nullable: true, unique: true })
  email: string;
  
  // @BeforeInsert()
  // emailTolowercase() {
  //   this.email = this.email.toLowerCase();
  // }

  @Column({nullable: true })
  Programme: string;

  @Column({nullable: true })
  Cohort: string;

  @OneToMany(() => ResourceEntity, (resources) => resources.tutor)
  resources: ResourceEntity[];

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.tutors, {
    nullable: true,
  })
  programme: ProgrammeEntity;

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.tutor)
  assignments: AssignmentEntity[];

  @OneToMany(() => AnnouncementEntity, (announcement) => announcement.tutor)
  announcements: AnnouncementEntity[];

  @ManyToOne(() => AdminEntity, (admin) => admin.tutors)
  admin: AdminEntity;
}
