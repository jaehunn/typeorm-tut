// 상속 -> 단일 테이블 생성

import {
  ChildEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
  UpdateDateColumn,
} from 'typeorm';

// Entity 등록을 함.
@Entity()
@TableInheritance({
  column: {
    // airplane 과 computer 를 구분하는 컬럼
    name: 'type',
    type: 'varchar',
  },
})
export class SingleTableModel {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@ChildEntity()
export class ComputerModel extends SingleTableModel {
  @Column()
  brand: string;
}

@ChildEntity()
export class AirplaneModel extends SingleTableModel {
  @Column()
  country: string;
}
