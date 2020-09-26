import {MigrationInterface, QueryRunner} from "typeorm";

export class nuevastablas1601131338588 implements MigrationInterface {
    name = 'nuevastablas1601131338588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `days` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `servicesandemployees` (`id` int NOT NULL AUTO_INCREMENT, `services_id` int NOT NULL, `employees_id` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `employees` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `name` varchar(30) NOT NULL, `lastname` varchar(30) NULL, `mobile` varchar(20) NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `timeemployees` (`id` int NOT NULL AUTO_INCREMENT, `timetables_id` int NOT NULL, `employees_id` int NOT NULL, `hini` time NOT NULL, `hend` time NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `timetables` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `days_id` int NOT NULL, `hini` time NOT NULL, `hend` time NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `timeservices` (`id` int NOT NULL AUTO_INCREMENT, `timetables_id` int NOT NULL, `services_id` int NOT NULL, `hini` time NOT NULL, `hend` time NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `services` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `name` varchar(50) NOT NULL, `description` varchar(150) NULL, `duration` int NOT NULL, `price` float NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `discounts` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `name` varchar(50) NOT NULL, `discount` smallint NOT NULL, `description` varchar(200) NULL, `dateIni` date NULL, `dateEnd` date NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `companies` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `description` varchar(150) NULL, `address` varchar(100) NULL, `mobile` varchar(20) NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `locations` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `lat` decimal(10,6) NOT NULL, `lng` decimal(11,6) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `REL_83e6a43e7ff98cff80c3d3a0c9` (`companies_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(60) NOT NULL, `password` varchar(64) NOT NULL, `is_active` tinyint NULL DEFAULT 1, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profiles` (`id` int NOT NULL AUTO_INCREMENT, `firstname` varchar(60) NOT NULL, `lastname` varchar(60) NOT NULL, `address` varchar(100) NOT NULL, `phone` varchar(20) NOT NULL, `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `servicesandemployees` ADD CONSTRAINT `FK_7e5d1eed20368e1191b951a0f42` FOREIGN KEY (`services_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `servicesandemployees` ADD CONSTRAINT `FK_e81c5c7ee201f3cac17bf4b5b51` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `employees` ADD CONSTRAINT `FK_3759af07a8be366195eb22fcbcd` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timeemployees` ADD CONSTRAINT `FK_167b0d48338db063604728d9d16` FOREIGN KEY (`timetables_id`) REFERENCES `timetables`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timeemployees` ADD CONSTRAINT `FK_07c0fdc4a87560d99df45a63a4c` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timetables` ADD CONSTRAINT `FK_6f65595a3cb41c5a3f8d3a05af4` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timetables` ADD CONSTRAINT `FK_c4b06bc4ed779a79867fea977f9` FOREIGN KEY (`days_id`) REFERENCES `days`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timeservices` ADD CONSTRAINT `FK_e2001ab2b4d0415497a3cf8f8b0` FOREIGN KEY (`timetables_id`) REFERENCES `timetables`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timeservices` ADD CONSTRAINT `FK_34717e0b0a872b473c7a9bb4cf9` FOREIGN KEY (`services_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `services` ADD CONSTRAINT `FK_16b1ef63249fddd0db6941cc547` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `discounts` ADD CONSTRAINT `FK_f129c4f86b217a7cef9e0c027d9` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `locations` ADD CONSTRAINT `FK_83e6a43e7ff98cff80c3d3a0c94` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `locations` DROP FOREIGN KEY `FK_83e6a43e7ff98cff80c3d3a0c94`");
        await queryRunner.query("ALTER TABLE `discounts` DROP FOREIGN KEY `FK_f129c4f86b217a7cef9e0c027d9`");
        await queryRunner.query("ALTER TABLE `services` DROP FOREIGN KEY `FK_16b1ef63249fddd0db6941cc547`");
        await queryRunner.query("ALTER TABLE `timeservices` DROP FOREIGN KEY `FK_34717e0b0a872b473c7a9bb4cf9`");
        await queryRunner.query("ALTER TABLE `timeservices` DROP FOREIGN KEY `FK_e2001ab2b4d0415497a3cf8f8b0`");
        await queryRunner.query("ALTER TABLE `timetables` DROP FOREIGN KEY `FK_c4b06bc4ed779a79867fea977f9`");
        await queryRunner.query("ALTER TABLE `timetables` DROP FOREIGN KEY `FK_6f65595a3cb41c5a3f8d3a05af4`");
        await queryRunner.query("ALTER TABLE `timeemployees` DROP FOREIGN KEY `FK_07c0fdc4a87560d99df45a63a4c`");
        await queryRunner.query("ALTER TABLE `timeemployees` DROP FOREIGN KEY `FK_167b0d48338db063604728d9d16`");
        await queryRunner.query("ALTER TABLE `employees` DROP FOREIGN KEY `FK_3759af07a8be366195eb22fcbcd`");
        await queryRunner.query("ALTER TABLE `servicesandemployees` DROP FOREIGN KEY `FK_e81c5c7ee201f3cac17bf4b5b51`");
        await queryRunner.query("ALTER TABLE `servicesandemployees` DROP FOREIGN KEY `FK_7e5d1eed20368e1191b951a0f42`");
        await queryRunner.query("DROP TABLE `profiles`");
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP INDEX `REL_83e6a43e7ff98cff80c3d3a0c9` ON `locations`");
        await queryRunner.query("DROP TABLE `locations`");
        await queryRunner.query("DROP TABLE `companies`");
        await queryRunner.query("DROP TABLE `discounts`");
        await queryRunner.query("DROP TABLE `services`");
        await queryRunner.query("DROP TABLE `timeservices`");
        await queryRunner.query("DROP TABLE `timetables`");
        await queryRunner.query("DROP TABLE `timeemployees`");
        await queryRunner.query("DROP TABLE `employees`");
        await queryRunner.query("DROP TABLE `servicesandemployees`");
        await queryRunner.query("DROP TABLE `days`");
    }

}
