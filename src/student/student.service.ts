import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    return await this.studentRepository.findOne({ where: { id } });
  }

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async createStudent(createStudentInput: CreateStudentInput) {
    const { name, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      name,
      lastName,
    });

    return await this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        } as any
      }
    });
  }
}
