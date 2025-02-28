import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionResolver } from './competition.resolver';
import { CompetitionService } from './competition.service';
import { Module } from '@nestjs/common';
import { Competition } from './models/competition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competition])],
  providers: [CompetitionResolver, CompetitionService],
})
export class CompetitionModule {}
