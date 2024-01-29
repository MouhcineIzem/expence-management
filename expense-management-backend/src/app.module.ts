import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProjectService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ProjectService],
})
export class AppModule {}
