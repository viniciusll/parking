import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiConfig = new DocumentBuilder()
    .setTitle('Estacionamento Martins')
    .setDescription('Está api é para o gerencimaneto do estacionamento Martins')
    .setVersion('1.0.0')
    .build();

  const apiDocument = SwaggerModule.createDocument(app, apiConfig);

  SwaggerModule.setup('document', app, apiDocument);

  await app.listen(3000);
}
bootstrap();
