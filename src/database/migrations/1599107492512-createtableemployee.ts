import {MigrationInterface, QueryRunner} from "typeorm";

export class createtableemployee1599107492512 implements MigrationInterface {
    name = 'createtableemployee1599107492512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `employees` (`id` int NOT NULL AUTO_INCREMENT, `companys_id` int NOT NULL, `name` varchar(50) NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`, `companys_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `employees` ADD CONSTRAINT `FK_6088f860684b6ee71fd83805065` FOREIGN KEY (`companys_id`) REFERENCES `companys`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `employees` DROP FOREIGN KEY `FK_6088f860684b6ee71fd83805065`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("DROP TABLE `employees`");
    }

}
