import {MigrationInterface, QueryRunner} from "typeorm";

export class locationtablecompany1600720160410 implements MigrationInterface {
    name = 'locationtablecompany1600720160410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `locations` (`id` int NOT NULL AUTO_INCREMENT, `companies_id` int NOT NULL, `lat` decimal(10,6) NOT NULL, `lng` decimal(11,6) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `REL_83e6a43e7ff98cff80c3d3a0c9` (`companies_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float NULL");
        await queryRunner.query("ALTER TABLE `locations` ADD CONSTRAINT `FK_83e6a43e7ff98cff80c3d3a0c94` FOREIGN KEY (`companies_id`) REFERENCES `companies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `locations` DROP FOREIGN KEY `FK_83e6a43e7ff98cff80c3d3a0c94`");
        await queryRunner.query("ALTER TABLE `services` CHANGE `price` `price` float(12) NULL");
        await queryRunner.query("DROP INDEX `REL_83e6a43e7ff98cff80c3d3a0c9` ON `locations`");
        await queryRunner.query("DROP TABLE `locations`");
    }

}
