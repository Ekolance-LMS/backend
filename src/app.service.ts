import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgrammeEntity } from './typeorm/entities/ProgrammeEntity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProgrammeEntity)
    private programmeRepository: Repository<ProgrammeEntity>,
  ) {}

  private programmes = this.programmeRepository.find();

  homePage() {
    return { programmes: this.programmes };
  }
}
