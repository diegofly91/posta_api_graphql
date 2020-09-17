import { Module } from '@nestjs/common';
import { GraphQL } from './config/config.graphql';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { ServiceModule } from './modules/service/service.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { CompanyModule } from './modules/company/company.module';
import { DayModule } from './modules/day/day.module';
import { TimetableModule } from './modules/timetable/timetable.module';
import { TimeServiceModule } from './modules/timeservice/timeservice.module';
import { TimeEmployeeModule } from './modules/timeemployee/timeemployee.module';

@Module({
    imports: [
        ConfigModule, DatabaseModule,
        UserModule, ServiceModule,
        CompanyModule, EmployeeModule, DayModule,
        TimeServiceModule, TimeEmployeeModule,
        TimetableModule, GraphQL,
    ],
})
export class AppModule {
    static port: number | string;
    static host: string;

    constructor(private readonly configService: ConfigService) {
        AppModule.host = this.configService.get(Configuration.HOST);
        AppModule.port = this.configService.get(Configuration.PORT);
    }
}
