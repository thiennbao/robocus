import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompetitionCreateInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  rule: string;

  @Field()
  award: string;

  @Field(() => [String])
  imageCreateBase64s: string[];
}
