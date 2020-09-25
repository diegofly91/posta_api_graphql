import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { GraphQL } from './config/config.graphql';

@Module({
    imports: [ConfigModule, DatabaseModule, UsersModule, GraphQL],
})
export class AppModule {
    static host: string;
    static port: number | string;

    constructor(private readonly configService: ConfigService) {
        AppModule.host = this.configService.get(Configuration.HOST);
        AppModule.port = this.configService.get(Configuration.PORT);
    }
}
