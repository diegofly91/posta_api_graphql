import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../../users/entities';
import { UsersService } from '../../users/services';
import { CreateCompanyFollowDto, QueryCompanyFollowDto, QueryCompanyUserFollowDto } from '../dtos';
import { Company, CompanyFollow } from '../entities';
import { CompanyService ,CompanyFollowService } from '../services';

@Resolver(() => CompanyFollow)
export class CompanyFollowResolver {
    constructor(
        private readonly companyFollowService: CompanyFollowService,
        private readonly companyServices: CompanyService,
        private readonly userServices: UsersService,
    ) {}
 
    @Query(() => CompanyFollow,  { nullable: true })
    async findByCompanyUserExist(@Args('input') input: QueryCompanyUserFollowDto): Promise<CompanyFollow> {
        return await this.companyFollowService.findByCompanyUserExist(input);
    }

    @Query(() => [CompanyFollow])
    async getCompanyFollow(@Args('input') input: QueryCompanyFollowDto): Promise<CompanyFollow[]> {
        return this.companyFollowService.getCompanyFollow(input);
    }

    @UsePipes(new ValidationPipe())
    @Mutation(() => CompanyFollow, { nullable: true })
    async createCompanyFollow(@Args('input') input: CreateCompanyFollowDto): Promise<CompanyFollow> {
        return await this.companyFollowService.createCompanyFollow(input);
    }

    @Mutation(() => CompanyFollow)
    async deleteCompanyFollow(@Args('id') id: number): Promise<boolean> {
        return await this.companyFollowService.deleteCompanyFollow(id);
    }

    @ResolveField('company', returns => Company)
    async company(@Parent() companyFollow) {
        const { companyId } = companyFollow;
        return await this.companyServices.getCompany(companyId);
    }
    @ResolveField('user', returns => User)
    async service(@Parent() companyFollow) {
        const { userId } = companyFollow;
        return await this.userServices.getUser(userId);
    }
}
