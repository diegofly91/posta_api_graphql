import { Args, Mutation, Query, Resolver,ResolveField, Parent, Subscription } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductInput, NewProductInput, ProductInputQuery } from './productDto/product.Input';
import { PaginationArgs } from '../../shared/graphql/variousDto/various.Input';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company.entity';

@Resolver(() => Product)
export class ProductResolvers {
    constructor(private readonly _productService: ProductService,
                private readonly _companyService: CompanyService
    ) {}

    @Query(() => [Product])
    public async getProducts(@Args('input') input?: ProductInputQuery, 
                             @Args('pagination') pagination?: PaginationArgs,
    ): Promise<Product[]> {
        return this._productService.getProducts(input,pagination);
    }
    
    @Query(() => Number)
    public async countProducts( @Args('input') input?: ProductInputQuery): Promise<number> {
        return this._productService.countProducts(input);
    }

    @Query(() => Product, { nullable: true })
    public async getProduct(@Args('id') id: number): Promise<Product> {
        return this._productService.getProduct(id);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Product, { nullable: true })
    public async createProduct( @Args('input') input: NewProductInput,): Promise<Product> {
        return await this._productService.createProduct(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => Product)
    public async updateProduct( @Args('id') id: number,  @Args('input') input: ProductInput): Promise<boolean> {
        return await this._productService.updateProduct(id, input);
    }

    @Mutation(() => Product)
    public async deleteProduct(@Args('id') id: number): Promise<boolean> {
        return await this._productService.deleteProduct(id);
    }

    @ResolveField('company', returns => Company)
    async company(@Parent() product) {
        const { companyId } = product;
        return await this._companyService.getCompany(companyId);
    }

    // @Subscription(() => Product)
    // countProduct(){

    // }
}
