import {MigrationInterface, QueryRunner} from "typeorm";

export class addtablefollow1606150932581 implements MigrationInterface {
    name = 'addtablefollow1606150932581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `companies_follows` ADD `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("ALTER TABLE `companies_follows` DROP COLUMN `created_at`");
    }

}
