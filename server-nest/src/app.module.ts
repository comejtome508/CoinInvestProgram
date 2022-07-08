import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import emailConfig from 'config/emailConfig';
import { validationSchema } from 'config/validationSchema';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

@Module({
  imports: [
    // ConfigModule.forRoot({
    // envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
    // load: [emailConfig],
    // isGlobal: true,
    // validationSchema,
    // }),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
