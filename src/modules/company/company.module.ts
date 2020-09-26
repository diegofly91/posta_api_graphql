import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoCompany  from './company.repository';
import { CompanyService } from './company.service';
import { CompanyResolvers } from './company.resolver';
import { Company } from './company.entity';

import { Service } from '../service/service.entity'
import { ServiceService } from '../service/service.service';
import RepoService from '../service/service.repository';

import { Employee } from '../employee/employee.entity';
import { EmployeeService } from '../employee/employee.service';
import RepoEmployee from '../employee/employee.repository';

import RepoTimetable from '../timetable/timetable.repository';
import { TimetableService } from '../timetable/timetable.service';
import { Timetable } from '../timetable/timetable.entity';

import RepoTimeService from '../timeservice/timeservice.repository';
import { TimeServiceService } from '../timeservice/timeservice.service';
import { TimeService } from '../timeservice/timeservice.entity';

import RepoTimeEmployee from '../timeemployee/timeemployee.repository';
import { TimeEmployeeService } from '../timeemployee/timeemployee.service';
import { TimeEmployee } from '../timeemployee/timeemployee.entity';

import { Day } from '../day/day.entity';
import RepoDay from '../day/day.repository';
import { DayService} from '../day/day.service'

import { Location } from '../location/location.entity';
import { LocationService } from '../location/location.service';
import RepoLocation from '../location/location.repository';

import { Discount } from '../discount/discount.entity';
import { DiscountService } from '../discount/discount.service';
import RepoDiscount from '../discount/discount.repository';

@Module({
    imports:   [TypeOrmModule.forFeature([Company,Location,Discount, Service, Employee,Timetable, Day, TimeService, TimeEmployee])],
    providers: [ 
                RepoCompany,CompanyService,CompanyResolvers, 
                RepoDay, DayService,
                RepoLocation, LocationService,
                RepoEmployee,EmployeeService,
                RepoService,ServiceService,
                RepoTimetable,TimetableService,
                RepoTimeService,TimeServiceService,
                RepoTimeEmployee,TimeEmployeeService,
                RepoDiscount, DiscountService
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
