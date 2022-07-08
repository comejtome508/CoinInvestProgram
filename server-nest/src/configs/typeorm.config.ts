import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'user',
  database: 'boardDB',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
