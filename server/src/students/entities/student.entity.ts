import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'students', synchronize: false })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studyRoomId: number;

  @Column()
  name: string;

  @Column()
  gender: number;

  @CreateDateColumn({ type: 'timestamp' })
  registerDate: Date;

  @Column()
  school: string;

  @Column()
  grade: number;

  @Column()
  parentPhone: string;

  @Column()
  studentPhone: string;
}
