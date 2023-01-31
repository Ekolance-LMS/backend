import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AdminEntity } from './AdminEntity';
import { AnnouncementEntity } from './AnnouncementEntity';
import { AssignmentEntity } from './AssignmentEntity';
import { BaseEntity } from './BaseEntity';
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

  @Column({ type: 'enum', enum: Status, default: Status.UPCOMING })
  status: Status;

  @ManyToOne(() => StudentEntity, (student) => student.programmes)
  student: StudentEntity;

  @ManyToOne(() => TutorEntity, (tutor) => tutor.programmes, {
    nullable: true,
  })
  tutor: TutorEntity;

  @OneToMany(() => ResourceEntity, (resources) => resources.programme)
  resources: ResourceEntity[];

  @OneToMany(() => AssignmentEntity, (assignments) => assignments.programme)
  assignments: AssignmentEntity[];

  @OneToMany(() => AnnouncementEntity, (announcement) => announcement.programme)
  announcements: AnnouncementEntity[];

  @ManyToOne(() => AdminEntity, (admin) => admin.programmes)
  admin: AdminEntity;
}
