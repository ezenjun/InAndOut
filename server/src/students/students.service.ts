import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async findAll() {
    const students = await this.studentRepository
      .createQueryBuilder('student')
      .where('student.study_room_id = :id', { id: 1 })
      .getRawMany();
    return students;
  }
}
