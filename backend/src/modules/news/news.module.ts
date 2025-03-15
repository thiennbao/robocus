import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsResolver } from './news.resolver';
import { NewsService } from './news.service';
import { Module } from '@nestjs/common';
import { News } from './models/news.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  providers: [NewsResolver, NewsService],
})
export class NewsModule {}
