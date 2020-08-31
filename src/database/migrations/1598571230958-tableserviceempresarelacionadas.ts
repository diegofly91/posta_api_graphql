import {MigrationInterface, QueryRunner} from "typeorm";

export class tableserviceempresarelacionadas1598571230958 implements MigrationInterface {
    name = 'tableserviceempresarelacionadas1598571230958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `services` (`id` int NOT NULL AUTO_INCREMENT, `companys_id` int NOT NULL, `name` varchar(50) NOT NULL, `description` varchar(150) NULL, `duration` int NOT NULL, `price` float NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`, `companys_id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `companys` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `description` varchar(150) NULL, `address` varchar(100) NULL, `phone` bigint NULL, `status` tinyint NOT NULL DEFAULT 1, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` ADD CONSTRAINT `FK_9b7e285aaf4071e2d8960ec520f` FOREIGN KEY (`companys_id`) REFERENCES `companys`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `services` DROP FOREIGN KEY `FK_9b7e285aaf4071e2d8960ec520f`");
        await queryRunner.query("DROP TABLE `companys`");
        await queryRunner.query("DROP TABLE `services`");
    }

}
