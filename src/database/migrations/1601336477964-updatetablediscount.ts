import {MigrationInterface, QueryRunner} from "typeorm";

export class updatetablediscount1601336477964 implements MigrationInterface {
    name = 'updatetablediscount1601336477964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `discounts` CHANGE `discount` `porcentage` smallint NOT NULL");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("ALTER TABLE `discounts` CHANGE `porcentage` `discount` smallint NOT NULL");
    }

}
