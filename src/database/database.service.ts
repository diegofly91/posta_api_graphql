import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { Configuration } from '../config/config.keys';

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService) {
            return {
                type: config.get(Configuration.DATABASE_TYPE),
                host: config.get(Configuration.DATABASE_HOST),
                port: parseInt(config.get(Configuration.DATABASE_PORT)),
                database: config.get(Configuration.DATABASE_NAME),
                username: config.get(Configuration.DATABASE_USER),
                password: config.get(Configuration.DATABASE_PASS),
                timezone: config.get(Configuration.DATABASE_TIMEZONE),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + 'migrations/*.{.ts,.js}'],
            } as ConnectionOptions;
        },
    }),
];
