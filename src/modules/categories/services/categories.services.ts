import { Injectable, Param } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.Input';
import { Category } from '../entities/categories.entity';
import RepoCategory from '../repositories/categories.repository';

@Injectable()
export class CategoriesService {
    constructor(private categoryRepository: RepoCategory) {}

    async getCategory(id: number): Promise<Category> {
        return await this.categoryRepository.getCategory(id);
    }

    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.getCategories();
    }

    async createCategory(categoryDto: CreateCategoryDto): Promise<boolean> {
        return await this.categoryRepository.createCategory(categoryDto);
    }

    async updateCategory(id: number, categoryDto: UpdateCategoryDto): Promise<boolean> {
        return await this.categoryRepository.updateCategory(id, categoryDto);
    }

    async deleteCategory(id: number): Promise<boolean> {
        return this.categoryRepository.deleteCategory(id);
    }
}
