import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'https://backend-nestjs-psi.vercel.app', // Allow specific origins
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS', // Allow specific HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
    allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
