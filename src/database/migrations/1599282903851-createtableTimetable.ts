import {MigrationInterface, QueryRunner} from "typeorm";

export class createtableTimetable1599282903851 implements MigrationInterface {
    name = 'createtableTimetable1599282903851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `timetables` (`id` int NOT NULL AUTO_INCREMENT, `companys_id` int NOT NULL, `days_id` int NOT NULL, `hini` time NOT NULL, `hend` time NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`, `companys_id`, `days_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `timetables` ADD CONSTRAINT `FK_095821e012390122cd1385b1eb6` FOREIGN KEY (`companys_id`) REFERENCES `companys`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `timetables` ADD CONSTRAINT `FK_c4b06bc4ed779a79867fea977f9` FOREIGN KEY (`days_id`) REFERENCES `days`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `timetables` DROP FOREIGN KEY `FK_c4b06bc4ed779a79867fea977f9`");
        await queryRunner.query("ALTER TABLE `timetables` DROP FOREIGN KEY `FK_095821e012390122cd1385b1eb6`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("DROP TABLE `timetables`");
    }

}
