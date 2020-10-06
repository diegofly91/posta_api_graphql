import {
    Args,
    Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.Input';
import { Category } from '../entities/categories.entity';
import { CategoriesService } from '../services/categories.services';
// import { PaginationArgs } from '../../../shared/graphql/variousDto/various.Input';

@Resolver(() => Category)
export class CategoryResolvers {
    constructor(private readonly _categoryService: CategoriesService
    ) {}

    @Query(() => Category, { nullable: true })
    public async getCategory(@Args('id') id: number): Promise<Category> {
        return this._categoryService.getCategory(id);
    }

    @Query(() => Category, { nullable: true })
    public async getCategories(): Promise<Category[]> {
        return this._categoryService.getCategories();
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Category, { nullable: true })
    public async createCategory(
        @Args('input') input: CreateCategoryDto,
    ): Promise<boolean> {
        return await this._categoryService.createCategory(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Category, { nullable: true })
    public async updateCategory(
        @Args('id') id: number,
        @Args('input') input: UpdateCategoryDto,
    ): Promise<boolean> {
        return await this._categoryService.updateCategory(id,input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Category, { nullable: true })
    public async deleteCategory(
        @Args('id') id: number
    ): Promise<boolean> {
        return await this._categoryService.deleteCategory(id);
    }

}
