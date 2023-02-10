import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgrammeEntity } from 'src/typeorm/entities/ProgrammeEntity';
import { CreateProgrammeParams, UpdateProgrammeParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammesService {
  constructor(
    @InjectRepository(ProgrammeEntity)
    private ProgrammeRepository: Repository<ProgrammeEntity>,
  ) {}

  getAllProgrammes() {
    return this.ProgrammeRepository.find();
  }

  createProgramme(createProgrammeDetails: CreateProgrammeParams) {
    //create or get ekoStablePool and return address
    const poolAddress = '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5';
    const newProgramme = this.ProgrammeRepository.create({
      ...createProgrammeDetails,
      poolAddress: poolAddress,
    });
    return this.ProgrammeRepository.save(newProgramme);
  }

  updateProgramme(id: number, updateProgrammeDetails: UpdateProgrammeParams) {
    return this.ProgrammeRepository.update(
      { id },
      { ...updateProgrammeDetails },
    );
  }

  deleteProgramme(id: number) {
    return this.ProgrammeRepository.delete({ id });
  }
}
