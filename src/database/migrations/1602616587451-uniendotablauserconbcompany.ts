import {MigrationInterface, QueryRunner} from "typeorm";

export class uniendotablauserconbcompany1602616587451 implements MigrationInterface {
    name = 'uniendotablauserconbcompany1602616587451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` ADD `isNeedEmployee` tinyint NOT NULL DEFAULT 1");
        await queryRunner.query("ALTER TABLE `services` ADD `quantityPost` int NULL");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("ALTER TABLE `services` DROP COLUMN `quantityPost`");
        await queryRunner.query("ALTER TABLE `services` DROP COLUMN `isNeedEmployee`");
    }

}
