import {MigrationInterface, QueryRunner} from "typeorm";

export class createproducttable1598808933172 implements MigrationInterface {
    name = 'createproducttable1598808933172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
    }

}
