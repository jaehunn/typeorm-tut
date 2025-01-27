import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Name {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}

@Entity()
export class StudentModel {
  @PrimaryGeneratedColumn()
  id: number;

  // 엔티티 임베딩
  // 중복 제거
  // 상속으로도 가능해서 임베딩을 선호하지 않을 수 있다.
  @Column(() => Name)
  name: Name;

  @Column()
  class: string;
}
