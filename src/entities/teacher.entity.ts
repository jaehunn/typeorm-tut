import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Name } from './student.entity';

// StudentModel 과 중복되는 필드가 있다.
// 엔티티 임베딩을 활용해보자.

@Entity()
export class TeacherModel {
  @PrimaryGeneratedColumn()
  id: number;

  // 엔티티 임베딩
  @Column(() => Name)
  name: Name;

  @Column()
  salary: number;
}
