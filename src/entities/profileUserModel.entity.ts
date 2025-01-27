import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileModel } from './profile.entity';

@Entity()
export class ProfileUserModel {
  @PrimaryGeneratedColumn()
  id: number;

  // profile.user 에 연결함.
  @OneToOne(() => ProfileModel, (profile) => profile.user)
  profile: ProfileModel;
}

// profile.user <=> user.profile

// one-to-one 시 주의할 점.
// JoinColumn 으로 어느 테이블에서 id 를 들고 있을지 정의
// 등록한 모델에서 Id 를 갖는다. UserModel
