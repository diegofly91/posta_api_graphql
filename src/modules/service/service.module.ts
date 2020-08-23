import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceService } from './service.service';
import { ServiceResolvers } from './service.resolver';
import { Service } from './service.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Service])],
    providers: [ServiceService, ServiceResolvers],
    exports: [ServiceService],
})
export class ServiceModule {}
