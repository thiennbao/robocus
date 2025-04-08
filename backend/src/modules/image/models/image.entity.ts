import { Field, ObjectType } from '@nestjs/graphql';
import { Competition } from 'src/modules/competition/models/competition.entity';
import { News } from 'src/modules/news/models/news.entity';
import Storage from 'src/utils/storage';
import {
  BeforeInsert,
  BeforeRemove,
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity('image')
@ObjectType()
export class Image {
  @PrimaryColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  url: string;

  @Column({ nullable: true })
  newsId: string;

  @ManyToOne(() => News, (news) => news.images, {
    eager: true,
    nullable: true,
    onDelete: 'CASCADE',
  })
  news: News;

  @ManyToOne(() => Competition, (competition) => competition.images, {
    eager: true,
    nullable: true,
    onDelete: 'CASCADE',
  })
  competition: Competition;

  @BeforeInsert()
  async upload() {
    const storage = new Storage();
    this.id = v4();
    this.url = await storage.upload(this.id, this.url);
  }

  @BeforeRemove()
  async delete() {
    const storage = new Storage();
    await storage.delete(this.id);
  }
}
