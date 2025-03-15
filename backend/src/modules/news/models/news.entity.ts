import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('news')
@Unique(['title'])
@ObjectType()
export class News {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  thumbnail: string;

  @Column()
  @Field()
  content: string;

  @Column({ type: 'text', array: true })
  @Field(() => [String])
  images: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  date: Date;
}
