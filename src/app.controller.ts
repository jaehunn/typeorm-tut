import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileUserModel } from './entities/profileUserModel.entity';
import { Repository } from 'typeorm';
import { ProfileModel } from './entities/profile.entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(ProfileUserModel)
    private userRepository: Repository<ProfileUserModel>,
    @InjectRepository(ProfileModel)
    private profileRepository: Repository<ProfileModel>,
  ) {}

  // @Get('users')
  // async getUsers(): Promise<UserModel[]> {
  //   return await this.userRepository.find({
  //     // id 만 내리도록 요청
  //     // select: {
  //     //   id: true,
  //     //   // title 은 없으면 안내린다.
  //     //   // null 이라도 내리려면 true 로
  //     //   title: false,
  //     // },
  //   });
  // }

  // @Get('users/:id')
  // async getUser(@Param('id') id: string): Promise<UserModel> {
  //   return await this.userRepository.findOne({ where: { id } });
  // }

  // @Post('users')
  // async createUser(@Body() user: UserModel): Promise<UserModel> {
  //   return await this.userRepository.save({
  //     title: user.title,
  //     ...user,
  //   });
  // }

  // @Patch('users/:id')
  // async updateUser(
  //   @Param('id') id: string,
  //   @Body() user: UserModel,
  // ): Promise<UserModel> {
  //   return await this.userRepository.save({
  //     id,
  //     ...user,
  //   });
  // }

  @Post('users/profile')
  async createUserAndProfile(): Promise<void> {
    await this.userRepository.save({});

    await this.profileRepository.save({
      profileImg: 'profileImg',
    });
  }

  @Get('users/profile')
  async getUserAndProfile(): Promise<ProfileUserModel[]> {
    return await this.userRepository.find({
      relations: {
        profile: true,
      },
    });
  }
}
