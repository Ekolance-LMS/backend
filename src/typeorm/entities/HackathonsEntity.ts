import { HackathonsStatus } from 'src/utils/enums';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';
//import { Hackathon } from './HackathonsEntity';
// import { TutorEntity } from './TutorEntity';

@Entity('hackathons')
export class HackathonsEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column({nullable: true})
  linkToHackathon: string;

  @Column({ type: 'enum', enum: HackathonsStatus })
  status: HackathonsStatus;

  @Column()
  applicationDeadline: Date;
  

//   @ManyToOne(() => ProgrammeEntity, (programme) => programme.hackathon)
//   programme: ProgrammeEntity;

//   @ManyToOne(() => TutorEntity, (tutor) => tutor.resources)
//   tutor: TutorEntity;
}
