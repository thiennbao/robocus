import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Competition } from './models/competition.entity';
import { CompetitionCreateInput } from './models/competition-create.input';
import { CompetitionUpdateInput } from './models/competition-update.input';
import { ImageService } from '../image/image.service';

@Injectable()
export class CompetitionService {
  constructor(
    @InjectRepository(Competition)
    private readonly competitionRepository: Repository<Competition>,
    private readonly imageService: ImageService,
  ) {}

  async findOneById(id: string): Promise<Competition | null> {
    const competition = this.competitionRepository.findOne({
      where: { id },
      relations: ['images'],
    });
    if (!competition) throw new NotFoundException();
    return competition;
  }

  async find(): Promise<Competition[]> {
    return this.competitionRepository.find();
  }

  async create(competitionCreateInput: CompetitionCreateInput) {
    const { imageCreateBase64s, ...rest } = competitionCreateInput;
    const images = await this.imageService.create(imageCreateBase64s);
    const newCompetition = this.competitionRepository.create({
      images,
      ...rest,
    });
    return this.competitionRepository.save(newCompetition);
  }

  async update(competitionUpdateInput: CompetitionUpdateInput) {
    const { id, imageCreateBase64s, imageDeleteIds, ...rest } =
      competitionUpdateInput;
    const competition = await this.findOneById(id);
    if (!competition) throw new NotFoundException();
    if (imageCreateBase64s) {
      await this.imageService.create(imageCreateBase64s, competition);
    }
    if (imageDeleteIds) {
      await this.imageService.delete(imageDeleteIds);
    }
    return this.competitionRepository.update({ id }, rest);
  }

  async delete(id: string) {
    const competition = await this.findOneById(id);
    if (!competition) throw new NotFoundException();
    return this.competitionRepository.remove(competition);
  }
}
