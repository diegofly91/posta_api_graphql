import {MigrationInterface, QueryRunner} from "typeorm";

export class onemuchMigrationService1598293002608 implements MigrationInterface {
    name = 'onemuchMigrationService1598293002608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
    }

}
