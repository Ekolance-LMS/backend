import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
import { CreateStudentParams, UpdateStudentParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import * as ethUtil from 'ethereumjs-util';
import * as sigUtil from '@metamask/eth-sig-util';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  createStudent(createStudentDetails: CreateStudentParams) {
    const generatedNonce: number = Math.floor(Math.random() * 10000000000);
    const student = this.studentRepository.create({
      ...createStudentDetails,
      nonce: generatedNonce,
    });
    return this.studentRepository.save(student);
  }

  updateStudent(id: number, updateStudentDetails: UpdateStudentParams) {
    return this.studentRepository.update(
      { id: id },
      { ...updateStudentDetails },
    );
  }

  loginStudent(publicAddress: string) {
    //check if user is registered then login else register
    // validate if address is in db->elsegoto signup page
    const student = this.studentRepository.findOne({
      where: { walletAddress: publicAddress },
    });

    return student;
  }

  async authenticateStudent(publicAddress: string, signature: any) {
    const student = await this.studentRepository.findOne({
      where: { walletAddress: publicAddress },
    });

    const msg = `I am signing my one-time nonce: ${student.nonce}`;

    // We now are in possession of msg, publicAddress and signature. We
    // can perform an elliptic curve signature verification with ecrecover
    const msgBuffer = ethUtil.toBuffer(msg);
    const msgHash = ethUtil.hashPersonalMessage(msgBuffer);
    const signatureBuffer = ethUtil.toBuffer(signature);
    const signatureParams = ethUtil.fromRpcSig(signature);
    const publicKey = ethUtil.ecrecover(
      msgHash,
      signatureParams.v,
      signatureParams.r,
      signatureParams.s,
    );
    const addressBuffer = ethUtil.publicToAddress(publicKey);
    const address = ethUtil.bufferToHex(addressBuffer);

    // The signature verification is successful if the address found with
    // ecrecover matches the initial publicAddress
    if (address.toLowerCase() === publicAddress.toLowerCase()) {
      //Authentication is successful
      student.nonce = Math.floor(Math.random() * 10000000000);
      this.studentRepository.save(student);
    } else {
      return 'Not found';
    }
  }
}
