import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { CompanyResolvers } from './company.resolver';
import { Company } from './company.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    providers: [CompanyService, CompanyResolvers],
    exports: [CompanyService],
})
export class CompanyModule {}
