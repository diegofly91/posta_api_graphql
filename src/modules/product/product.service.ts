import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { NewProductInput, ProductInput, ProductInputQuery } from './productDto/product.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private _productRepository: Repository<Product>,
    ) {
    }

    async getProduct(id: number): Promise<Product> {
        return await this._productRepository.findOne({id});
    }

    async getProducts(input?: ProductInputQuery, pagination?: PaginationArgs): Promise<Product[]> {
        let inputData = input ? input : {};

        if (pagination) {
            const { limit, offset } = pagination;
            return await this._productRepository.find({
                where: inputData,
                take: limit,
                skip: offset,
            });
        } else {
            return await this._productRepository.find({ where: inputData });
        }
    }

    async countProducts(input?: ProductInputQuery): Promise<number> {
        if (input) {
            return await this._productRepository.count({ where: input });
        } else {
            return await this._productRepository.count();
        }
    }

    async createProduct(input: NewProductInput): Promise<Product> {
        const savedCompany: Product = await this._productRepository.save(input);
        return savedCompany;
    }

    async updateProduct(id: number, input: ProductInput): Promise<boolean> {
        const product = await this._productRepository.update({id}, input);
        if (product) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }

    async deleteProduct(id: number): Promise<boolean> {
        const dele = await this._productRepository.delete({id});
        if (dele) {
            return true;
        } else {
            throw new NotFoundException();
        }
    }
}
