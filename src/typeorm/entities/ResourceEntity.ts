import { BaseEntity, Column, Entity } from 'typeorm';

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

  // Set up relations with programme, tutor
}
