import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath : '.env'
    }),
    UserModule,
    MongooseModule.forRoot(process.env.DB_PATH,{
      autoCreate : true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
