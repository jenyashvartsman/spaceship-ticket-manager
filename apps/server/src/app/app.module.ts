import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/db.config';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbConfig)
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
