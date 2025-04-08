import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionResolver } from './competition.resolver';
import { CompetitionService } from './competition.service';
import { Module } from '@nestjs/common';
import { Competition } from './models/competition.entity';
import { ImageModule } from '../image/image.module';

@Module({
  imports: [TypeOrmModule.forFeature([Competition]), ImageModule],
  providers: [CompetitionResolver, CompetitionService],
})
export class CompetitionModule {}
