import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { Configuration } from '../config/config.keys';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
        TypeOrmModule.forRootAsync({
            imports: [ ConfigModule ],
            inject: [ ConfigService ],
            async useFactory(config: ConfigService) {
                return {
                    // ssl: true,
                    type: 'mysql' as 'mysql',
                    port: parseInt(config.get(Configuration.PORT)),
                    database: config.get(Configuration.DATABASE),
                    host: config.get(Configuration.HOST),
                    username: config.get(Configuration.USERNAME),
                    password: config.get(Configuration.PASSWORD),
                    timezone: '-03:00',
                    entities: [ __dirname + '/../**/*.entity{.ts,.js}' ],
                    migrations: [ __dirname + 'migrations/*.{.ts,.js}' ]
                } as ConnectionOptions;
            }
        })
];
