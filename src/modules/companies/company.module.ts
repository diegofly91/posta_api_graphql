import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoCompany from './repositories/company.repository';
import { CompanyService } from './services/company.service';
import { CompanyResolvers } from './resolvers/company.resolver';
import { Company } from './entities';

import { Service } from '../services/entities';
import { ServiceService } from '../services/services/service.service';
import RepoService from '../services/repositories/service.repository';

import { Employee } from '../employees/entities/employee.entity';
import { EmployeeService } from '../employees/services/employee.service';
import RepoEmployee from '../employees/repositories/employee.repository';

import RepoTimetable from '../timetables/repositories/timetable.repository';
import { TimetableService } from '../timetables/services/timetable.service';
import { Timetable } from '../timetables/entities/timetable.entity';

import RepoTimeService from '../services/repositories/timeservice.repository';
import { TimeServiceService } from '../services/services/timeservice.service';
import { TimeService } from '../services/entities/timeservice.entity';

import RepoTimeEmployee from '../employees/repositories/timeemployee.repository';
import { TimeEmployeeService } from '../employees/services/timeemployee.service';
import { TimeEmployee } from '../employees/entities/timeemployee.entity';

import { Day } from '../timetables/entities/day.entity';
import RepoDay from '../timetables/repositories/day.repository';
import { DayService } from '../timetables/services/day.service';

import { Location } from './entities/location.entity';
import { LocationService } from './services/location.service';
import RepoLocation from './repositories/location.repository';
import { LocationResolvers } from './resolvers/location.resolver';

import { Discount } from '../discounts/entities/discount.entity';
import { DiscountService } from '../discounts/services/discount.service';
import RepoDiscount from '../discounts/repositories/discount.repository';

import { UploadService } from '../uploads/upload.service'
import { ConfigService } from '../../config/config.service';


@Module({
    imports:   [TypeOrmModule.forFeature([Company,Location,Discount, Service, Employee,Timetable, Day, TimeService, TimeEmployee])],
    providers: [ 
                RepoCompany,CompanyService,CompanyResolvers, 
                RepoLocation, LocationService,LocationResolvers,
                RepoDay, DayService,
                RepoEmployee,EmployeeService,
                RepoService,ServiceService,
                RepoTimetable,TimetableService,
                RepoTimeService,TimeServiceService,
                RepoTimeEmployee,TimeEmployeeService,
                RepoDiscount, DiscountService,
                UploadService, ConfigService
               ],
    exports:   [  
                RepoCompany,CompanyService,
                RepoDay,
                RepoService, 
                RepoLocation,
                RepoEmployee, 
                RepoTimetable, 
                RepoTimeService, 
                RepoTimeEmployee,
                RepoDiscount
               ], 
})
export class CompanyModule {}
