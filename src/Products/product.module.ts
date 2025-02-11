import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Déclare l'entité Product pour TypeORM
  controllers: [ProductController], // Ajoute le contrôleur
  providers: [ProductService], // Ajoute le service
  exports: [ProductService], // Exporte le service si nécessaire dans d'autres modules
})
export class ProductModule {}
