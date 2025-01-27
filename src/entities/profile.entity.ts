import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProfileUserModel } from './profileUserModel.entity';

@Entity()
export class ProfileModel {
  @PrimaryGeneratedColumn()
  id: number;

  // user.profile 에 연결함.
  // JoinColumn 하면 ProfileUserModel 테이블에서 ID profile.id 를 갖는다.
  // ProfileUserModel 에서 profile.id 레퍼런스 컬럼을 생성시킨다.
  @OneToOne(() => ProfileUserModel, (user) => user.profile)
  @JoinColumn()
  user: ProfileUserModel;

  @Column()
  profileImg: string;
}
