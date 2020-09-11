import {MigrationInterface, QueryRunner} from "typeorm";

export class newtabletimeemployees1599840741366 implements MigrationInterface {
    name = 'newtabletimeemployees1599840741366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `timeemployees` (`id` int NOT NULL AUTO_INCREMENT, `timetables_id` int NOT NULL, `employees_id` int NOT NULL, `hini` time NOT NULL, `hend` time NOT NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `timeemployees` ADD CONSTRAINT `FK_167b0d48338db063604728d9d16` FOREIGN KEY (`timetables_id`) REFERENCES `timetables`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timeemployees` ADD CONSTRAINT `FK_07c0fdc4a87560d99df45a63a4c` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `timeemployees` DROP FOREIGN KEY `FK_07c0fdc4a87560d99df45a63a4c`");
        await queryRunner.query("ALTER TABLE `timeemployees` DROP FOREIGN KEY `FK_167b0d48338db063604728d9d16`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("DROP TABLE `timeemployees`");
    }

}
