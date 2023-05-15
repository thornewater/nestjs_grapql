import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => [Post])
  async getPosts() {
    return this.postsService.findAll();
  }

  @Query((returns) => Post)
  async getPost(@Args('id') id: number) {
    return this.postsService.findById(id);
  }

  @Mutation((returns) => Post)
  async addPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    const result = await this.postsService.create(createPostInput);
    console.log(result);
    return result;
  }
}
