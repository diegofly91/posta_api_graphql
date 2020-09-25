import { GraphQLModule } from '@nestjs/graphql';

export const GraphQL = GraphQLModule.forRoot({
    typePaths: ['../**/*.graphql'],
    playground: true,
    installSubscriptionHandlers: true,
    debug: true,
    context: ({ req, connection }) => ({ req }),
    formatError: error => new Error(error.message),
});
