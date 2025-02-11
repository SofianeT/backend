import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertProductData1645101500392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO products (name, price, description) VALUES
      ('Laptop Gamer X500', 1499.99, 'Un ordinateur portable de haute performance pour les jeux vidéo, avec un processeur Intel i7 et une carte graphique NVIDIA GTX 1660.'),
      ('Casque Audio Pro-Style', 299.99, 'Casque audio sans fil avec suppression active du bruit et un son de qualité studio. Confort maximal pour de longues sessions d'écoute.'),
      ('Smartphone X5', 899.99, 'Un smartphone haut de gamme avec écran OLED, appareil photo de 108MP, et batterie longue durée.'),
      ('Montre Connectée FitTrack', 179.99, 'Montre connectée avec suivi d'activité, GPS intégré, et fonctionnalités de santé avancées pour un mode de vie plus actif.'),
      ('Clavier Mécanique RGB', 129.99, 'Clavier mécanique avec touches rétroéclairées RGB et switchs ultra-réactifs, idéal pour les joueurs et les développeurs.'),
      ('Appareil Photo Reflex EOS 90D', 1249.99, 'Appareil photo reflex numérique avec capteur CMOS 32,5MP, idéal pour les photographes professionnels et amateurs.'),
      ('Tablette Graphique ProDraw 12', 379.99, 'Tablette graphique de 12 pouces avec une haute sensibilité au stylet, idéale pour les artistes numériques.'),
      ('Enceinte Bluetooth BoomBox', 59.99, 'Enceinte Bluetooth portable, avec une qualité sonore impressionnante et une batterie longue durée pour des soirées inoubliables.');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DELETE FROM products WHERE id IN (1, 2, 3, 4, 5, 6, 7, 8)',
    );
  }
}
