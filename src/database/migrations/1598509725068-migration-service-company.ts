import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationServiceCompany1598509725068 implements MigrationInterface {
    name = 'migrationServiceCompany1598509725068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `FK_25334fffe4ce341dd1da38acbd9` ON `services`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `description` `description` varchar(150) NULL");
        await queryRunner.query("ALTER TABLE `services` CHANGE `duration` `duration` int NULL");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `services` CHANGE `companyId` `companyId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `companys` CHANGE `description` `description` varchar(150) NULL");
        await queryRunner.query("ALTER TABLE `companys` CHANGE `address` `address` varchar(100) NULL");
        await queryRunner.query("ALTER TABLE `companys` CHANGE `phone` `phone` bigint NULL");
        await queryRunner.query("ALTER TABLE `services` ADD CONSTRAINT `FK_25334fffe4ce341dd1da38acbd9` FOREIGN KEY (`companyId`) REFERENCES `companys`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` DROP FOREIGN KEY `FK_25334fffe4ce341dd1da38acbd9`");
        await queryRunner.query("ALTER TABLE `companys` CHANGE `phone` `phone` bigint NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `companys` CHANGE `address` `address` varchar(100) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `companys` CHANGE `description` `description` varchar(150) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `services` CHANGE `companyId` `companyId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `services` CHANGE `duration` `duration` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `services` CHANGE `description` `description` varchar(150) NULL DEFAULT 'NULL'");
        await queryRunner.query("CREATE INDEX `FK_25334fffe4ce341dd1da38acbd9` ON `services` (`companyId`)");
    }

}
