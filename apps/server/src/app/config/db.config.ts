import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import * as process from 'node:process';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  password: process.env.DATABASE_PASSWORD || 'admin',
  username: process.env.DATABASE_USER || 'admin',
  database: process.env.DATABASE_NAME || 'spaceship_ticket_manager',
  synchronize: true,
  logging: true,
  entities: [],
};

