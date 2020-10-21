import {MigrationInterface, QueryRunner} from "typeorm";

export class uniendotablauserconbcompany1602703149807 implements MigrationInterface {
    name = 'uniendotablauserconbcompany1602703149807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `companies` ADD `logo` varchar(60) NULL");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("ALTER TABLE `companies` DROP COLUMN `logo`");
    }

}
