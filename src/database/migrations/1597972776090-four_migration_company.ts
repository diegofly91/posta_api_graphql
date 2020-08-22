import { MigrationInterface, QueryRunner } from 'typeorm';

export class fourMigrationCompany1597972776090 implements MigrationInterface {
    name = 'fourMigrationCompany1597972776090';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `companys` ADD `phone` bigint NULL',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `companys` DROP COLUMN `phone`');
    }
}
