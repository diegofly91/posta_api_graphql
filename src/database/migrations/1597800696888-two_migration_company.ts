import {MigrationInterface, QueryRunner} from "typeorm";

export class twoMigrationCompany1597800696888 implements MigrationInterface {
    name = 'twoMigrationCompany1597800696888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `companies` CHANGE `description` `description` varchar(150) NULL");
        await queryRunner.query("ALTER TABLE `companies` CHANGE `address` `address` varchar(100) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `companies` CHANGE `address` `address` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `companies` CHANGE `description` `description` varchar(150) NOT NULL");
    }

}
