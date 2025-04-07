import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsResolver } from './news.resolver';
import { NewsService } from './news.service';
import { Module } from '@nestjs/common';
import { News } from './models/news.entity';
import { ImageModule } from '../image/image.module';

@Module({
  imports: [TypeOrmModule.forFeature([News]), ImageModule],
  providers: [NewsResolver, NewsService],
})
export class NewsModule {}
