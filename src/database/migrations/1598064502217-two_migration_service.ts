import { MigrationInterface, QueryRunner } from 'typeorm';

export class twoMigrationService1598064502217 implements MigrationInterface {
    name = 'twoMigrationService1598064502217';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `services` ADD `duration` int NULL',
        );
        await queryRunner.query(
            'ALTER TABLE `services` ADD `price` float NULL',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `services` DROP COLUMN `price`');
        await queryRunner.query(
            'ALTER TABLE `services` DROP COLUMN `duration`',
        );
    }
}
