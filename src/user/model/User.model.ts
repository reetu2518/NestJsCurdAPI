import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as Sh } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    id:Sh.Types.ObjectId;
    
    @Prop()
    name:string;

    @Prop({unique:true})
    email:string;

    @Prop()
    gender:string;

    @Prop()
    status:string;
}

export const UserSchema = SchemaFactory.createForClass(User);