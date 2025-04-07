import { Injectable, NotFoundException } from '@nestjs/common';
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
      base64s.map(async (base64) => {
        const newImage = this.imageRepository.create({
          news: container,
          url: base64,
        });
        return await this.imageRepository.save(newImage);
      }),
    );
  }

  async delete(ids: string[]) {
    return Promise.all(
      ids.map(async (id) => {
        const image = await this.imageRepository.findOneBy({ id });
        if (!image) throw new NotFoundException();
        return this.imageRepository.remove(image);
      }),
    );
  }
}
