import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'host.docker.internal',
  port: 3300,
  //port: 3306,
  username: 'boarduser',
  //password: 'root0001',
  password: 'secret',
  database: 'board',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
