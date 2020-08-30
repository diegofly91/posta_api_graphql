import {MigrationInterface, QueryRunner} from "typeorm";

export class createproducttable1598582223440 implements MigrationInterface {
    name = 'createproducttable1598582223440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `companys_id` int NOT NULL, `name` varchar(50) NOT NULL, `description` varchar(150) NULL, `price` float NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`, `companys_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_2e457eacfb65b3dd18d9d8c5f9f` FOREIGN KEY (`companys_id`) REFERENCES `companys`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_2e457eacfb65b3dd18d9d8c5f9f`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NOT NULL");
        await queryRunner.query("DROP TABLE `products`");
    }

}
