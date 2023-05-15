import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import { DataSourceModule } from './appDataSource/data-source.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gpl',
    }),
    PostsModule,
    DataSourceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
