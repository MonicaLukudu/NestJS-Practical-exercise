import { Controller, Get, Post, Patch, Delete, Body, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { QueryBooksDto } from './dto/query-books.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query() query: QueryBooksDto) {
    return this.booksService.findAll(query);
  }
  // TODO (Task 4): GET    /books/:id
  @Get(':id')
  findOne(@Query('id') id: number){
    return this.booksService.findOne(id);
  }
  // TODO (Task 2): POST   /books
  @Post('/books')
  createBook(@Body() dto: CreateBookDto){
    return this.booksService.create(dto);
  }
  // TODO (Task 5): PATCH  /books/:id
  @Patch(':id')
  updateBook(@Query('id') id: number, @Body() dto: UpdateBookDto){
    return this.booksService.update(id, dto);
  }
  // TODO (Task 6): DELETE /books/:id
  @Delete(':id')
  removeBook(@Query('id') id: number){
    return this.booksService.remove(id);
  }
}
