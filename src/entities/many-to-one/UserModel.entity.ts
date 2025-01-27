import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostModel } from './PostModel.entity';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id: number;

  // user 입장에서 post 는 여러개
  // post - many / user - one
  @OneToMany(() => PostModel, (post) => post.author)
  posts: PostModel[];
}

// joinColumn 은 many-to-one 과 one-to-many 에서 설정이 불가능.
// 논리적으로 many-to-one 테이블이 id 를 꼭 가지고 있음.
// post 가 가지는 식.

// one-to-many 에서 id 를 가지지 못한다. user
// 컬럼당 하나의 값만 가지므로.
