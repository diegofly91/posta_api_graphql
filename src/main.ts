import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException, ValidationError } from '@nestjs/common';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (errors: ValidationError[]) => {
                const error_messages = errors.map(error =>
                  Object.values(error.constraints),
                );
                return new BadRequestException(error_messages.toString());
              },
              forbidUnknownValues: false,
        }),
      );
    await app.listen(AppModule.port);
}
bootstrap();
