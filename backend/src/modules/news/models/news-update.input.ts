import { Field, InputType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class NewsUpdateInput {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  thumbnail: string;

  @Field({ nullable: true })
  content: string;

  @Field(() => [String], { nullable: true })
  images: string[];
}
