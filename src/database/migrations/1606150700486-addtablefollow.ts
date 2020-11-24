import {MigrationInterface, QueryRunner} from "typeorm";

export class addtablefollow1606150700486 implements MigrationInterface {
    name = 'addtablefollow1606150700486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `companies_follows` (`id` int NOT NULL AUTO_INCREMENT, `company_id` int NOT NULL, `user_id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `companies_follows` ADD CONSTRAINT `FK_ed95a7fbb477214bec82940ed7a` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `companies_follows` ADD CONSTRAINT `FK_541e2ad23caf062a97a863ebf28` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `companies_follows` DROP FOREIGN KEY `FK_541e2ad23caf062a97a863ebf28`");
        await queryRunner.query("ALTER TABLE `companies_follows` DROP FOREIGN KEY `FK_ed95a7fbb477214bec82940ed7a`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("DROP TABLE `companies_follows`");
    }

}
