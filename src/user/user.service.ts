import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './model/User.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel :Model<UserDocument>
    ){}

    // fetch all users
    async all():Promise<User[]>{
        return await this.userModel.find().exec();
    }
    
    // fetch all users
    async findOne(id:any):Promise<User>{
        return await this.userModel.findById(id);
    }

    // create user
    async create(data):Promise<User>{
        return await new this.userModel(data).save();
    }

    // update user
    async update(id:any, data):Promise<any>{
        return await this.userModel.findByIdAndUpdate(id, data);
    }

    // delete user
    async delete(id:any):Promise<void>{
        await this.userModel.findByIdAndDelete(id);
    }
}
