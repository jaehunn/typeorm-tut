import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class UserModel {
  /**
   * uuid 는 증가되는 숫자가 아니다.
   * 절대로 겹치지 않는 값으로 생성됨.
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  // 데이터가 갱신되면 자동으로 설정.
  @UpdateDateColumn()
  updatedAt: Date;

  // 처음 1
  // 업데이트 될 때마다 +1 증가함.
  // save() 가 몇번 불렸는지 확인 가능.
  @VersionColumn()
  version: number;

  // = @PrimaryGeneratedColumn
  @Column()
  @Generated('increment')
  additionalId: number;
}
