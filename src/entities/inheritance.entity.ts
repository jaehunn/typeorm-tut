// 상속 -> 개별 테이블 생성

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// Entity 등록을 하지 않음.
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity()
export class BookModel extends BaseEntity {
  @Column()
  name: string;
}

@Entity()
export class CarModel extends BaseEntity {
  @Column()
  brand: string;
}
