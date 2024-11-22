import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'https://frontend-nextjs-h5vj1lcfj-omargarcia.vercel.app', // Allow specific origins
    methods: 'GET,POST,PUT,DELETE,PATCH', // Allow specific HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
    allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
