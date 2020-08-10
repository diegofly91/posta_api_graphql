import { Module } from '@nestjs/common';
import { GraphQL } from './config/config.graphql'
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [ConfigModule, 
            DatabaseModule, 
            UserModule,
            GraphQL,
          ],
})
export class AppModule {
  static port: number | string;

	constructor(private readonly _configService: ConfigService) {
		AppModule.port = this._configService.get(Configuration.APP_PORT);
	}
}
