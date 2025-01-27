import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserModel } from './UserModel.entity';

@Entity()
export class PostModel {
  @PrimaryGeneratedColumn()
  id: number;

  // post 입장에서 author 는 하나만 가진다.
  // 반대로 author 입장에서 post 는 여러개를 가진다.
  // post - many / author - one
  @ManyToOne(() => UserModel, (user) => user.posts)
  author: UserModel;

  @Column()
  title: string;
}
