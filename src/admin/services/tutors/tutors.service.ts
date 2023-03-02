import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TutorEntity } from 'src/typeorm/entities/TutorEntity';
import { CreateTutorParams, UpdateTutorParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import * as ethUtil from 'ethereumjs-util';
import * as sigUtil from '@metamask/eth-sig-util';

@Injectable()
export class TutorsService {
  constructor(
    @InjectRepository(TutorEntity)
    private tutorRepository: Repository<TutorEntity>,
  ) {}

  addTutor(createTutorDetails: CreateTutorParams) {
    //const generatedNonce: number = Math.floor(Math.random() * 10000000000);
    const tutor = this.tutorRepository.create({
      ...createTutorDetails,
     // nonce: generatedNonce,
    });
    return this.tutorRepository.save(tutor);
  }

  updateTutor(id: number, updateTutorDetails: UpdateTutorParams) {
    return this.tutorRepository.update(
      { id: id },
      { ...updateTutorDetails },
    );
  }
  getAddy(addy : string) {
    return this.tutorRepository.findOne({
        where: { walletAddress : addy },
    });
  }
  loginTutor(publicAddress: string) {
    //check if user is registered then login else register
    // validate if address is in db->elsegoto signup page
    // const tutor = this.tutorRepository.findOne({
    //   where: { walletAddress : publicAddress },
    // });
    const addyy = this.getAddy(publicAddress);
    if (addyy) {
        console.log("login successful");
        return publicAddress;
    } else {
        console.log("Not authorized");
    }
 }

  delete_tutor(id: number) {
    return this.tutorRepository.delete({ id });
  }

//   removeTutor(publicAddress: string) {
//     // find tutor by wallet address
//     // remove wallet as tutor
//     let tutor = this.tutorRepository.delete(
//        publicAddress);
//     return tutor;
//   }

  getAllTutors() {
    return this.tutorRepository.find();
  }
}
