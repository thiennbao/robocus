import { Field, ObjectType } from '@nestjs/graphql';
import { Image } from 'src/modules/images/models/image.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
@ObjectType()
export class News {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  date: Date;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @OneToMany(() => Image, (image) => image.news)
  @Field(() => [Image])
  images: Image[];
}
