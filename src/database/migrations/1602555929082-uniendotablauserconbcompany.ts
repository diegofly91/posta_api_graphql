import {MigrationInterface, QueryRunner} from "typeorm";

export class uniendotablauserconbcompany1602555929082 implements MigrationInterface {
    name = 'uniendotablauserconbcompany1602555929082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
    }

}
