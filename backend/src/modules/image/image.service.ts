import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './models/image.entity';
import { Repository } from 'typeorm';
import { News } from '../news/models/news.entity';
import { Competition } from '../competition/models/competition.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async create(
    base64s: string[],
    container?: News | Competition,
  ): Promise<Image[]> {
    return Promise.all(
      base64s.map(async (base64) => {
        const news = container instanceof News ? container : undefined;
        const competition =
          container instanceof Competition ? container : undefined;
        const newImage = this.imageRepository.create({
          news,
          competition,
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
