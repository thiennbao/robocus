import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompetitionService } from './competition.service';
import { Competition } from './models/competition.entity';
import { CompetitionCreateInput } from './models/competition-create.input';
import { CompetitionUpdateInput } from './models/competition-update.input';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';

@Resolver()
export class CompetitionResolver {
  constructor(private readonly competitionService: CompetitionService) {}

  @Query(() => Competition)
  async competition(@Args('id') id: string): Promise<Competition | null> {
    const competition = await this.competitionService.findOneById(id);
    return competition;
  }

  @Query(() => [Competition])
  async competitions(): Promise<Competition[]> {
    const competitions = await this.competitionService.find();
    return competitions;
  }

  @UseGuards(JwtGuard)
  @Mutation(() => Competition)
  async createCompetition(@Args('data') data: CompetitionCreateInput) {
    const newCompetition = await this.competitionService.create(data);
    return newCompetition;
  }

  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  async updateCompetition(@Args('data') data: CompetitionUpdateInput) {
    await this.competitionService.update(data);
    return true;
  }

  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  async deleteCompetition(@Args('id') id: string) {
    await this.competitionService.delete(id);
    return true;
  }
}
