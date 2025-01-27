import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TagModel } from './tag.entity';

@Entity()
export class PostModel {
  @PrimaryGeneratedColumn()
  id: number;

  // joinTable 은 둘 중 하나에만 설정하면 됨.

  // post 는 여러 태그를 가짐 to many
  // tag 는 여러 포스트에 해당할 수 있다. to many
  // post - many / tag - many
  @ManyToMany(() => TagModel, (tag) => tag.posts)
  @JoinTable()
  tags: TagModel[];

  @Column()
  title: string;
}

// many-to-many 관계를 생성하보면 관계 테이블이 추가로 생성되는 것을 확인.
