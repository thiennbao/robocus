import { CompetitionModule } from './modules/competition/competition.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/models/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { Competition } from './modules/competition/models/competition.entity';
import { News } from './modules/news/models/news.entity';
import { NewsModule } from './modules/news/news.module';
import { Image } from './modules/image/models/image.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User, Competition, News, Image],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    CompetitionModule,
    NewsModule,
  ],
})
export class AppModule {}
