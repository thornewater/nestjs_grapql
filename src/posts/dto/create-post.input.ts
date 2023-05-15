import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @Field()
  @IsBoolean()
  readonly isDone: boolean;
}

@ObjectType()
export class PostDto {
  @Field()
  readonly content: string;

  @Field()
  readonly isDone: boolean;
}
