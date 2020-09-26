import {MigrationInterface, QueryRunner} from "typeorm";

export class tablediscouncompany1600733004417 implements MigrationInterface {
    name = 'tablediscouncompany1600733004417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `discounts` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `name` varchar(50) NOT NULL, `discount` smallint NOT NULL, `description` varchar(200) NULL, `dateIni` date NULL, `dateEnd` date NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `discounts` ADD CONSTRAINT `FK_f129c4f86b217a7cef9e0c027d9` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `discounts` DROP FOREIGN KEY `FK_f129c4f86b217a7cef9e0c027d9`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("DROP TABLE `discounts`");
    }

}
