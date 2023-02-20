import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceEntity } from 'src/typeorm/entities/ResourceEntity';
import { Repository } from 'typeorm';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectRepository(ResourceEntity)
    private announcementRepository: Repository<ResourceEntity>,
  ) {}
}
