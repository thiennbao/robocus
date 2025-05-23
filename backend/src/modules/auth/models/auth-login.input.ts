import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthLoginInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
