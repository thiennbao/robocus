import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './models/news.entity';
import { Repository } from 'typeorm';
import { NewsCreateInput } from './models/new-create.input';
import { NewsUpdateInput } from './models/news-update.input';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
  ) {}

  async findOneById(id: string): Promise<News | null> {
    const news = this.newsRepository.findOneBy({ id });
    if (!news) {
      throw new NotFoundException();
    }
    return news;
  }

  async find(): Promise<News[]> {
    return this.newsRepository.find({ order: { date: 'DESC' } });
  }

  async create(newsCreateInput: NewsCreateInput) {
    const newNews = this.newsRepository.create(newsCreateInput);
    return this.newsRepository.save(newNews);
  }

  async update(newsUpdateInput: NewsUpdateInput) {
    const { id, ...data } = newsUpdateInput;
    return this.newsRepository.update({ id }, data);
  }

  async delete(id: string) {
    return this.newsRepository.delete({ id });
  }
}
