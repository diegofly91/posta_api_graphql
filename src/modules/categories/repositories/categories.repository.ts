import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateCategoryDto, CreateCategoryDto } from '../dtos/categories.Input';
import { Category } from '../entities/categories.entity';
import { InjectRepository } from '@nestjs/typeorm';

@EntityRepository(Category)
export default  class RepoCategory{

    public constructor(
        @InjectRepository(Category) public readonly _categoryRepository: Repository<Category>
      ) {}

    async getCategory(id: number): Promise<Category> {
        return await this._categoryRepository.findOne({id});
    }

    async getCategories(): Promise<Category[]> {
        return await this._categoryRepository.find();
    }

    async createCategory(input: CreateCategoryDto): Promise<boolean> {
        await this._categoryRepository.save(input);
        return true;
    }

    async updateCategory(id: number,categoryDto: UpdateCategoryDto): Promise<boolean> {
        const categoryToUpdate = await this._categoryRepository.findOne(id);
        if (!categoryToUpdate) {
            throw new NotFoundException('Category not exists!');
        }
        await this._categoryRepository.update(id, categoryDto);
        return true;
    }

    async deleteCategory(id: number): Promise<boolean> {
        const categoryToDelete = await this._categoryRepository.findOne(id);
        if (!categoryToDelete) {
            throw new NotFoundException('Category not exists!');
        }
        await this._categoryRepository.delete(id);
        return true;
    }
}
