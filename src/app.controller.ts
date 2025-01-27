import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './entities/user.entitiy';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(UserModel) private userRepository: Repository<UserModel>,
  ) {}

  @Get('users')
  async getUsers(): Promise<UserModel[]> {
    return await this.userRepository.find({
      // id 만 내리도록 요청
      // select: {
      //   id: true,
      //   // title 은 없으면 안내린다.
      //   // null 이라도 내리려면 true 로
      //   title: false,
      // },
    });
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string): Promise<UserModel> {
    return await this.userRepository.findOne({ where: { id } });
  }

  @Post('users')
  async createUser(@Body() user: UserModel): Promise<UserModel> {
    return await this.userRepository.save({
      title: user.title,
      ...user,
    });
  }

  @Patch('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UserModel,
  ): Promise<UserModel> {
    return await this.userRepository.save({
      id,
      ...user,
    });
  }
}
