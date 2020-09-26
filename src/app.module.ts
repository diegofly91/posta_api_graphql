import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { ServiceModule } from './modules/service/service.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { CompanyModule } from './modules/company/company.module';
import { DayModule } from './modules/day/day.module';
import { TimetableModule } from './modules/timetable/timetable.module';
import { TimeServiceModule } from './modules/timeservice/timeservice.module';
import { TimeEmployeeModule } from './modules/timeemployee/timeemployee.module';
import { ServEmplModule } from './modules/servempl/servempl.module';
import { LocationModule } from './modules/location/location.module'; 
import { DiscountModule } from './modules/discount/discount.module';
import { GraphQL } from './config/config.graphql';


@Module({
    imports: [
                 ConfigModule, DatabaseModule, 
                 ServiceModule, 
                 CompanyModule,EmployeeModule, DayModule, 
                 TimeServiceModule, TimeEmployeeModule,
                 TimetableModule, ServEmplModule,
                 LocationModule, DiscountModule, GraphQL
             ],
})
export class AppModule {
    static host: string;
    static port: number | string;

    constructor(private readonly configService: ConfigService) {
        AppModule.host = this.configService.get(Configuration.HOST);
        AppModule.port = this.configService.get(Configuration.PORT);
    }
}
