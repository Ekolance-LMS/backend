import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TutorEntity } from 'src/typeorm/entities/TutorEntity';
import { UpdateTutorParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(TutorEntity)
    private tutorRepository: Repository<TutorEntity>,
  ) {}

  updateTutor(id: number, updatetutorDetails: UpdateTutorParams) {
    return this.tutorRepository.update(
      { id: id },
      { ...updatetutorDetails },
    );
  }

  loginTutor(publicAddress: string) {
    //check if user is registered then login else register
    // validate if address is in db->elsegoto signup page
    const tutor = this.tutorRepository.findOne({
      where: { walletAddress: publicAddress },
    });
    if (tutor) {
        console.log('login successful');
        return tutor;
    } else {
        console.log('Not A tutor');
    }

    // return tutor;
  }
}
