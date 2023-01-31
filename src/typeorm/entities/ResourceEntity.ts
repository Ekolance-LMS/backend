import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ProgrammeEntity } from './ProgrammeEntity';
import { TutorEntity } from './TutorEntity';

export enum RESOURCE_TYPE {
  VIDEO = 'video',
  DOCUMENT = 'document',
  REPOSITORY = 'repository',
  WEBSITE = 'website',
}
@Entity('resources')
export class ResourceEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @Column({ type: 'enum', enum: RESOURCE_TYPE, default: RESOURCE_TYPE.VIDEO })
  resourceType: RESOURCE_TYPE;

  @ManyToOne(() => ProgrammeEntity, (programme) => programme.resources)
  programme: ProgrammeEntity;

  @ManyToOne(() => TutorEntity, (tutor) => tutor.resources)
  tutor: TutorEntity;
}
