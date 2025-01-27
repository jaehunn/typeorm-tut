import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

@Entity()
export class UserModel {
  /**
   * uuid 는 증가되는 숫자가 아니다.
   * 절대로 겹치지 않는 값으로 생성됨.
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    // : string 으로 유추됨.
    type: 'varchar',

    // title 로 name 이 유추됨.
    name: 'title',

    // 값의 길이 = 입력 값의 길이
    // varchar 여야 가능
    length: 100,

    // null 가능
    nullable: true,

    // false 면 처음 저장할때만 값 지정가능, true 면 이후 값 변경가능
    // typeorm 0.3.17 에서는 에러를 던짐.
    // 0.3.20 에서 에러를 안던지지만 데이터는 그대로인 것을 확인
    update: true,

    // 조회 가능 여부
    // find() 실행 시 기본으로 값을 불러올지
    // 기본은 true 임
    // nullable 이니까 없을 수 있는데. null 이라도 내려준다.
    select: true,

    // 값이 없으면 기본값으로 들어감.
    default: 'default value',

    // 유일무이한 값인지. 절대로 겹치지 않아야함.
    // primary column == 이메일 주소 같은 경우
    // null 도 겹치면 안됨.
    /**
     * 두번 null 로 생성하니 default value 가 두번째에서 겹치게 됨.
     * [Nest] 4501  - 2025. 01. 27. 오후 2:01:18   ERROR [ExceptionsHandler] duplicate key value violates unique constraint "UQ_08f4d5e8a2fbc2be12068d46256"
     */
    unique: false,
  })
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

  @Column({
    type: 'enum',

    // 어떤 값을 가질 수 있는지.
    enum: Role,

    // 기본값
    default: Role.USER,
  })
  role: Role; // string 으로 바꾸면 소스 코드에서는 가능한데. enum: Role 에 벗어나면 internal error 를 일으킨다.
}
