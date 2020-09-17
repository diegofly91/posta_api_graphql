import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
    @Field({ nullable: true })
    offset?: number;

    @Field({ nullable: true })
    limit?: number;
}
