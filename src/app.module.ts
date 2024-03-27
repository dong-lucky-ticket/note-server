import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  // 同时连接多个数据库
  // imports: [
  //   MongooseModule.forRoot('mongodb://localhost/test', {
  //     connectionName: 'cats',
  //   }),
  //   MongooseModule.forRoot('mongodb://localhost/users', {
  //     connectionName: 'users',
  //   }),
  // ],
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
