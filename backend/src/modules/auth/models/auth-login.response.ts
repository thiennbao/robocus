import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthLoginResponse {
  @Field()
  token: string;
}
