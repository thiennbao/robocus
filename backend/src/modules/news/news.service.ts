import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './models/news.entity';
import { Repository } from 'typeorm';
import { NewsCreateInput } from './models/new-create.input';
import { NewsUpdateInput } from './models/news-update.input';
import { ImageService } from '../image/image.service';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private readonly newsRepository: Repository<News>,
    private readonly imageService: ImageService,
  ) {}

  async findOneById(id: string): Promise<News | null> {
    const news = await this.newsRepository.findOne({
      where: { id },
      relations: ['images'],
    });
    if (!news) throw new NotFoundException();
    return news;
  }

  async find(): Promise<News[]> {
    return this.newsRepository.find({ order: { date: 'DESC' } });
  }

  async create(newsCreateInput: NewsCreateInput) {
    const { imageCreateBase64s, ...rest } = newsCreateInput;
    const images = await this.imageService.create(imageCreateBase64s);
    const newNews = this.newsRepository.create({ images, ...rest });
    return this.newsRepository.save(newNews);
  }

  async update(newsUpdateInput: NewsUpdateInput) {
    const { id, imageCreateBase64s, imageDeleteIds, ...rest } = newsUpdateInput;
    const news = await this.findOneById(id);
    if (!news) throw new NotFoundException();
    if (imageCreateBase64s) {
      await this.imageService.create(imageCreateBase64s, news);
    }
    if (imageDeleteIds) {
      await this.imageService.delete(imageDeleteIds);
    }
    return this.newsRepository.update({ id }, rest);
  }

  async delete(id: string) {
    const news = await this.findOneById(id);
    if (!news) throw new NotFoundException();
    return this.newsRepository.remove(news);
  }
}
