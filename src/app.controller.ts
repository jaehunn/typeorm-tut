import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    return await this.userRepository.find();
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
}
