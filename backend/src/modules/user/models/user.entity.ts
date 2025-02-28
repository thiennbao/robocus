import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity('users')
@Unique(['username'])
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;
}
