import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { AdminEntity } from './AdminEntity';
import { AnnouncementEntity } from './AnnouncementEntity';
import { AssignmentEntity } from './AssignmentEntity';
import { BaseEntity } from './BaseEntity';
import { ProgrammeApplicationEntity } from './ProgrammeApplicationEntity';
import { ResourceEntity } from './ResourceEntity';
import { StudentEntity } from './StudentEntity';
import { TutorEntity } from './TutorEntity';

export enum Status {
  UPCOMING = 'upcoming',
  ONGOING = 'ongoing',
  ENDED = 'ended',
}

@Entity({ name: 'programmes' })
export class ProgrammeEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  linkToFlier: string;

  @Column()
  applicationDeadline: Date;

  @Column({ type: 'enum', enum: Status, default: Status.UPCOMING })
  status: Status;

  @ManyToMany(() => StudentEntity)
  students: StudentEntity[];

  @OneToMany(() => TutorEntity, (tutor) => tutor.programme)
  tutors: TutorEntity[];

  @OneToMany(() => ResourceEntity, (resources) => resources.programme)
  resources: ResourceEntity[];

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.programme)
  assignments: AssignmentEntity[];

  @OneToMany(() => AnnouncementEntity, (announcement) => announcement.programme)
  announcements: AnnouncementEntity[];

  @OneToMany(
    () => ProgrammeApplicationEntity,
    (application) => application.programme,
  )
  applications: ProgrammeApplicationEntity[];

  @ManyToOne(() => AdminEntity, (admin) => admin.programmes)
  admin: AdminEntity;
}
