import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import emailConfig from 'config/emailConfig';
import { validationSchema } from 'config/validationSchema';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
    BoardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
