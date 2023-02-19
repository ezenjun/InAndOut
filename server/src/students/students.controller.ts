import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('/info')
  async findAll() {
    return this.studentsService.findAll();
  }
}
