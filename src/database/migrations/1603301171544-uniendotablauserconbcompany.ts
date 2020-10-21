import {MigrationInterface, QueryRunner} from "typeorm";

export class uniendotablauserconbcompany1603301171544 implements MigrationInterface {
    name = 'uniendotablauserconbcompany1603301171544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `companies` DROP COLUMN `logo`");
        await queryRunner.query("ALTER TABLE `companies` ADD `logo` varchar(120) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `companies` DROP COLUMN `logo`");
        await queryRunner.query("ALTER TABLE `companies` ADD `logo` varchar(60) NULL");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
    }

}
