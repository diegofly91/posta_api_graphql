import {MigrationInterface, QueryRunner} from "typeorm";

export class newmigrationtables1599784433680 implements MigrationInterface {
    name = 'newmigrationtables1599784433680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `days` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `timetables` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `days_id` int NOT NULL, `hini` time NOT NULL, `hend` time NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `timeservices` (`id` int NOT NULL AUTO_INCREMENT, `timetables_id` int NOT NULL, `services_id` int NOT NULL, `hini` time NOT NULL, `hend` time NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `services` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `name` varchar(50) NOT NULL, `description` varchar(150) NULL, `duration` int NOT NULL, `price` float NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `employees` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `name` varchar(30) NOT NULL, `lastname` varchar(30) NULL, `mobile` varchar(20) NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `companies` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `description` varchar(150) NULL, `address` varchar(100) NULL, `mobile` varchar(20) NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(50) NOT NULL, `email` varchar(50) NOT NULL, `password` varchar(50) NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `timetables` ADD CONSTRAINT `FK_6f65595a3cb41c5a3f8d3a05af4` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timetables` ADD CONSTRAINT `FK_c4b06bc4ed779a79867fea977f9` FOREIGN KEY (`days_id`) REFERENCES `days`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timeservices` ADD CONSTRAINT `FK_e2001ab2b4d0415497a3cf8f8b0` FOREIGN KEY (`timetables_id`) REFERENCES `timetables`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timeservices` ADD CONSTRAINT `FK_34717e0b0a872b473c7a9bb4cf9` FOREIGN KEY (`services_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `services` ADD CONSTRAINT `FK_16b1ef63249fddd0db6941cc547` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `employees` ADD CONSTRAINT `FK_3759af07a8be366195eb22fcbcd` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `employees` DROP FOREIGN KEY `FK_3759af07a8be366195eb22fcbcd`");
        await queryRunner.query("ALTER TABLE `services` DROP FOREIGN KEY `FK_16b1ef63249fddd0db6941cc547`");
        await queryRunner.query("ALTER TABLE `timeservices` DROP FOREIGN KEY `FK_34717e0b0a872b473c7a9bb4cf9`");
        await queryRunner.query("ALTER TABLE `timeservices` DROP FOREIGN KEY `FK_e2001ab2b4d0415497a3cf8f8b0`");
        await queryRunner.query("ALTER TABLE `timetables` DROP FOREIGN KEY `FK_c4b06bc4ed779a79867fea977f9`");
        await queryRunner.query("ALTER TABLE `timetables` DROP FOREIGN KEY `FK_6f65595a3cb41c5a3f8d3a05af4`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `companies`");
        await queryRunner.query("DROP TABLE `employees`");
        await queryRunner.query("DROP TABLE `services`");
        await queryRunner.query("DROP TABLE `timeservices`");
        await queryRunner.query("DROP TABLE `timetables`");
        await queryRunner.query("DROP TABLE `days`");
    }

}
