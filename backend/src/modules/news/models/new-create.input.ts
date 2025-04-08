import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewsCreateInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => [String])
  imageCreateBase64s: string[];
}
