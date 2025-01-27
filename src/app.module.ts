import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModel } from './entities/user.entitiy';
import { BookModel, CarModel } from './entities/inheritance.entity';

// import {
//   AirplaneModel,
//   ComputerModel,
//   SingleTableModel,
// } from './entities/single.entity';

@Module({
  imports: [
    // 모델 레포지토리 주입
    TypeOrmModule.forFeature([UserModel]),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'typeormtut',

      // 자동으로 테이블을 생성시킨다.
      // run 시키고 explorer 에서 확인 가능
      entities: [CarModel, BookModel],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
