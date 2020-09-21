import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoLocation from './location.repository';
import { Location } from './location.entity';
import { LocationResolvers } from './location.resolver';
import { LocationService } from './location.service';

import RepoCompany from '../company/company.repository';
import { Company } from '../company/company.entity';
import { CompanyService } from '../company/company.service';


@Module({
    imports: [TypeOrmModule.forFeature([Location, Company ])],
    providers: [
                 RepoLocation,LocationService,LocationResolvers,
                 RepoCompany,CompanyService,
               ],
    exports:   [
                 RepoLocation, LocationService,
                 RepoCompany, 
                ],
})
export class LocationModule {}
