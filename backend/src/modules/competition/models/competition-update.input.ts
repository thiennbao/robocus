import { Field, InputType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CompetitionUpdateInput {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  rule: string;

  @Field({ nullable: true })
  award: string;

  @Field(() => [String], { nullable: true })
  imageCreateBase64s: string[];

  @Field(() => [String], { nullable: true })
  imageDeleteIds: string[];
}
