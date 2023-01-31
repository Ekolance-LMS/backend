import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity('announcements')
export class AnnouncementEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ type: 'tinytext' })
  content: string;

  //Add relationship for tutor,admin, programme/cohort
}
