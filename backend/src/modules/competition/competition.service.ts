import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Competition } from './models/competition.entity';
import { CompetitionCreateInput } from './models/competition-create.input';
import { CompetitionUpdateInput } from './models/competition-update.input';

@Injectable()
export class CompetitionService {
  constructor(
    @InjectRepository(Competition)
    private readonly competitionRepository: Repository<Competition>,
  ) {}

  async findOneById(id: string): Promise<Competition | null> {
    const competition = this.competitionRepository.findOneBy({ id });
    if (!competition) {
      throw new NotFoundException();
    }
    return competition;
  }

  async find(): Promise<Competition[]> {
    return this.competitionRepository.find();
  }

  async create(competitionCreateInput: CompetitionCreateInput) {
    const newCompetition = this.competitionRepository.create(
      competitionCreateInput,
    );
    return this.competitionRepository.save(newCompetition);
  }

  async update(competitionUpdateInput: CompetitionUpdateInput) {
    const { id, ...data } = competitionUpdateInput;
    return this.competitionRepository.update({ id }, data);
  }

  async delete(id: string) {
    return this.competitionRepository.delete({ id });
  }
}
