import {MigrationInterface, QueryRunner} from "typeorm";

export class newtableserviceandemployees1600376554196 implements MigrationInterface {
    name = 'newtableserviceandemployees1600376554196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `servicesandemployees` (`id` int NOT NULL AUTO_INCREMENT, `services_id` int NOT NULL, `employees_id` int NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `servicesandemployees` ADD CONSTRAINT `FK_7e5d1eed20368e1191b951a0f42` FOREIGN KEY (`services_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `servicesandemployees` ADD CONSTRAINT `FK_e81c5c7ee201f3cac17bf4b5b51` FOREIGN KEY (`employees_id`) REFERENCES `employees`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `servicesandemployees` DROP FOREIGN KEY `FK_e81c5c7ee201f3cac17bf4b5b51`");
        await queryRunner.query("ALTER TABLE `servicesandemployees` DROP FOREIGN KEY `FK_7e5d1eed20368e1191b951a0f42`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("DROP TABLE `servicesandemployees`");
    }

}
