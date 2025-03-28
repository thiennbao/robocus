import { Field, ObjectType } from '@nestjs/graphql';
import { News } from 'src/modules/news/models/news.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('image')
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
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

  @BeforeInsert()
  upload() {
    // Todo: upload to storage
    this.url = 'data:image/png;base64,' + this.url;
  }
}
