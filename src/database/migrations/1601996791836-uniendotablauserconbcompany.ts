import {MigrationInterface, QueryRunner} from "typeorm";

export class uniendotablauserconbcompany1601996791836 implements MigrationInterface {
    name = 'uniendotablauserconbcompany1601996791836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
    }

}
