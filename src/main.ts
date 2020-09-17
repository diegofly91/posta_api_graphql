import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException, ValidationError, Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (errors: ValidationError[]) => {
                const errorMessages = errors.map(error =>
                    Object.values(error.constraints),
                );
                return new BadRequestException(errorMessages.toString());
            },
            forbidUnknownValues: false,
        }),
    );
    
    await app.listen(AppModule.port);
}

bootstrap().then(() => {
    Logger.log(`Your application is running on http://${AppModule.host}:${AppModule.port}`, 'main:bootstrap');
});
