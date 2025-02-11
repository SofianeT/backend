import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Products/product.module';

@Module({
  imports: [
    // Configuration de la base de données MySQL
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'Test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),

    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
