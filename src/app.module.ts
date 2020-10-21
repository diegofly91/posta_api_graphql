import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { ServiceModule } from './modules/services/service.module';
import { EmployeeModule } from './modules/employees/employee.module';
import { CompanyModule } from './modules/companies/company.module';
import { TimetableModule } from './modules/timetables/timetable.module';
import { DiscountModule } from './modules/discounts/discount.module';
import { CategoryModule } from './modules/categories/category.module'
import { UserModule } from './modules/users/users.module';
import { GraphQL } from './config/config.graphql';
import { Image } from './shared/Scalars/Image.scalar'
import { UploadModule } from './modules/uploads/upload.module'

@Module({
    imports: [
                 ConfigModule, DatabaseModule, 
                 ServiceModule, CategoryModule,
                 CompanyModule,EmployeeModule, 
                 TimetableModule, UserModule,
                 DiscountModule, GraphQL, 
                 UploadModule
             ],
    providers: [Image],           
})
export class AppModule {
    static host: string;
    static port: number | string;

    constructor(private readonly configService: ConfigService) {
        AppModule.host = this.configService.get(Configuration.HOST);
        AppModule.port = this.configService.get(Configuration.PORT);
    }
}
