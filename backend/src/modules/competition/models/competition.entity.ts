import { Field, ObjectType } from '@nestjs/graphql';
import { Image } from 'src/modules/image/models/image.entity';
import {
  BeforeRemove,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('competitions')
@Unique(['name'])
@ObjectType()
export class Competition {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  rule: string;

  @Column()
  @Field()
  award: string;

  @OneToMany(() => Image, (image) => image.competition)
  @Field(() => [Image])
  images: Image[];

  @BeforeRemove()
  deleteImages() {
    this.images.forEach((image) => image.delete());
  }
}
