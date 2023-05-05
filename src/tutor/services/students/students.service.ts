import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgrammeEntity } from 'src/typeorm/entities/ProgrammeEntity';
import { StudentEntity } from 'src/typeorm/entities/StudentEntity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(ProgrammeEntity)
    private programmeRepository: Repository<ProgrammeEntity>,
  ) {}

  async getAllStudents(programmeId: number) {
    //Get students by programme/cohort
    const programme = await this.programmeRepository.findOne({
      where: { id: programmeId },
      relations: {
        students: true,
      },
    });
    return programme.students;
  }
}
