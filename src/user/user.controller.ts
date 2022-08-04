import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { response } from 'express';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  async all() {
    return this.userService.all();
  }

  @Get(':id')
  async findOne(@Param('id') id: any) {
    return this.userService.findOne(id);
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      if (!createUserDto.email || !createUserDto.name) {
        throw new BadRequestException('Email/Password Can not be blank');
      }
      const user = await this.userService.create({
        name: createUserDto.name,
        email: createUserDto.email,
        gender: createUserDto.gender,
        status: createUserDto.status,
      });
      return user;
    } catch (error) {
      if (error.code == 11000) {
        return {
          status: 500,
          msg: 'Duplicate Entry',
        };
      } else {
        throw new BadRequestException("Invalid Exception");
      }
    }
  }

  @Put('update')
  async update(
    @Body('id') id: any,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('gender') gender: string,
    @Body('status') status: string,
  ) {
    return this.userService.update(id, {
      name: name,
      email: email,
      gender: gender,
      status: status,
    });
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: any) {
    this.userService.delete(id);
    return {
      message: 'User Deleted Successfully!',
    };
  }
}
