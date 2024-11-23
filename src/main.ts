import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'https://backend-nestjs-psi.vercel.app', // Allow specific origins
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS', // Allow specific HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma', // Allow specific headers
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
