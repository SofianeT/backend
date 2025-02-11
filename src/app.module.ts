import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Products/product.module'; // Import du module produit

@Module({
  imports: [
    // Configuration de la base de données MySQL
    TypeOrmModule.forRoot({
      type: 'mysql', // On utilise MySQL maintenant
      host: '127.0.0.1', // Adresse du serveur
      port: 8889, // Port MySQL pour MAMP
      username: 'root', // Nom d'utilisateur MySQL
      password: 'root', // Mot de passe MySQL
      database: 'Test', // Nom de la base de données
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Les entités doivent être trouvées ici
      synchronize: true, // Attention : à désactiver en production
    }),

    ProductModule, // Ajout du module produit
  ],
  controllers: [AppController], // Contrôleurs globaux
  providers: [AppService], // Services globaux
})
export class AppModule {}
