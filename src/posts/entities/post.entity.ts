import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({})
@Entity({ name: 'posts' })
export class Post {
  @Field()
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Field()
  @Column({ name: 'content', type: 'varchar', length: 300 })
  content: string;

  @Field()
  @Column({ name: 'is_done', type: 'boolean', default: false })
  isDone: boolean;
}
