import { Post } from '@nestjs/common';
import { Entity, ILike, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Post('sample')
  async sample() {
    // create() 엔티티 생성자 대신 쓰는 것.
    // create 만으로 db 에 들어가지는 않음. save 필요
    const user = await this.userRepository.create({
      name: 'test',
    });

    // save 는 객체 생성 하고 db 에도 저장함.
    const user = await this.userRepository.save({
      name: 'test',
    });

    // preload
    // 입력된 값을 기반으로 디비에서 불러옴.
    // 추가 입력값으로 기존 값을 대체한다.
    // 저장은 안함.
    const user = await this.userRepository.preload({
      id: 1,
      name: 'test',
    });

    // delete
    const user = await this.userRepository.delete(1);

    // increment
    // id 1 인 데이터에 age 를 1씩 증가시키겠다.
    await this.userRepository.increment({ id: 1 }, 'age', 1);

    // decrement 도 마찬가지

    // count
    // test% 에 해당하는 name 의 데이터 갯수
    const count = await this.userRepository.count({
      where: {
        name: ILike('test%'),
      },
    });

    // sum, avg, minimum, maximum
    // 해당 컬럼의 합, 평균, 최소, 최대
    const sum = await this.userRepository.sum('age', {
      where: {
        name: ILike('test%'),
      },
    });

    // findAndCount()
    // 데이터 가져오고 마지막 배열 값으로 count 출력
  }
}
