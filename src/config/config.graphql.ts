  
import { GraphQLModule } from '@nestjs/graphql';

export const GraphQL = GraphQLModule.forRoot({
    typePaths: ['../**/*.graphql'],
    playground: true,
    installSubscriptionHandlers: true,
    debug: true,
    uploads: {
        maxFileSize: 20000000, // 20 MB
        maxFiles: 5
    },
    context: async ({ req, connection }) => ({ 
        req
        // if(connection){
        //     return connection.context;
        //  }else{
        //     const token = req.headers['authorization']
        //     if(token !== "null"){
        //         try {
        //             //verificamos el token
        //             const usuarioActual = await jwt.verify(Configuration.SECRET)
        //             //agregamos el mail al request
        //             req.usuarioActual = usuarioActual;
        //             return { usuarioActual }
        //         } catch (err) {
        //             console.error(err)
        //         }
        //     }
        // }
    
    }),
    formatError: error => new Error(error.message),
});
