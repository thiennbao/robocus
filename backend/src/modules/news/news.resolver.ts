import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { News } from './models/news.entity';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';
import { NewsCreateInput } from './models/new-create.input';
import { NewsUpdateInput } from './models/news-update.input';

@Resolver()
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Query(() => News)
  async news(@Args('id') id: string): Promise<News | null> {
    const news = await this.newsService.findOneById(id);
    return news;
  }

  @Query(() => [News])
  async newsfeed(): Promise<News[]> {
    const newsfeed = await this.newsService.find();
    return newsfeed;
  }

  @UseGuards(JwtGuard)
  @Mutation(() => News)
  async createNews(@Args('data') data: NewsCreateInput) {
    const newNews = await this.newsService.create(data);
    return newNews;
  }

  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  async updateNews(@Args('data') data: NewsUpdateInput) {
    await this.newsService.update(data);
    return true;
  }

  @UseGuards(JwtGuard)
  @Mutation(() => Boolean)
  async deleteNews(@Args('id') id: string) {
    await this.newsService.delete(id);
    return true;
  }
}
