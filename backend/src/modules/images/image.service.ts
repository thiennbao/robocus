import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './models/image.entity';
import { Repository } from 'typeorm';
import { News } from '../news/models/news.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async create(base64s: string[], container?: News): Promise<Image[]> {
    return Promise.all(
      base64s.map((base64) => {
        const newImage = this.imageRepository.create({
          url: base64,
          news: container,
        });
        return this.imageRepository.save(newImage);
      }),
    );
  }

  async delete(ids: string[]) {
    return Promise.all(ids.map((id) => this.imageRepository.delete({ id })));
  }
}
