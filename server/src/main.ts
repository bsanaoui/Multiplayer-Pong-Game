import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Chat')
    .setDescription('Build a realtime chat web application')
    .setVersion('1.0')
    .addTag('Chat')
    .build();
  /* initialize Swagger using the SwaggerModule class */ 
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('chat',app,document)
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
