import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HackathonsEntity } from 'src/typeorm/entities/HackathonsEntity';
import { CreateHackathonParams, UpdateHackathonParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class HackathonsService {
  constructor(
    @InjectRepository(HackathonsEntity)
    private HackathonsRepository: Repository<HackathonsEntity>,
  ) {}

  getAllHackathons() {
    return this.HackathonsRepository.find();
  }

  createHackathons(createHackathonsDetails: CreateHackathonParams) {
    //create or get ekoStablePool and return address
    //const poolAddress = '0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5';
    const newHackathons = this.HackathonsRepository.create({
      ...createHackathonsDetails,
      //poolAddress: poolAddress,
    });
    return this.HackathonsRepository.save(newHackathons);
  }

  updateHackathons(id: number, updateHackathonsDetails: UpdateHackathonParams) {
    return this.HackathonsRepository.update(
      { id },
      { ...updateHackathonsDetails },
    );
  }

  deleteHackathons(id: number) {
    return this.HackathonsRepository.delete({ id });
  }
}
