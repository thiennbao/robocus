import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewsCreateInput {
  @Field()
  title: string;

  @Field()
  thumbnail: string;

  @Field()
  content: string;

  @Field(() => [String])
  images: string[];
}
