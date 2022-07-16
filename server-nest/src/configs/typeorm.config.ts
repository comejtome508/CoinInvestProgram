import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  // password: 'root0001',
  password: 'root',
  database: 'boardDB',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
