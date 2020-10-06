import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './entities/categories.entity';
import { CategoriesService } from './services/categories.services';
import { CategoryResolvers } from './resolvers/categories.resolvers'
import  RepoCategory from './repositories/categories.repository';

@Module({
    imports:   [TypeOrmModule.forFeature([Category])],
    providers: [ 
                RepoCategory, CategoriesService, CategoryResolvers
               ],
    exports:   [  
                RepoCategory, CategoriesService
               ], 
})
export class CategoryModule {}
