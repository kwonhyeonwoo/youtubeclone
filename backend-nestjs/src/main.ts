import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // 들어오는 데이터가 유효하지 않으면 자동으로 삭제한다.
    disableErrorMessages: true // 클라이언트한테 오류에 대한 자세한 정보 노출x, 보안성 향상
  }))
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
    exposedHeaders: ['Authorization'], // * 사용할 헤더 추가.
  });
  await app.listen(4000);
}
bootstrap();
