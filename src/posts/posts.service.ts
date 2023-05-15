import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  @InjectRepository(Post)
  private readonly PostRepository: Repository<Post>;

  async create(createPostInput: CreatePostInput) {
    const postData = await this.PostRepository.create(createPostInput);
    return await this.PostRepository.save(postData);
  }

  async findAll() {
    return this.PostRepository.find();
  }
  async findById(id: number) {
    return this.PostRepository.findOneBy({ id: id });
  }
}
