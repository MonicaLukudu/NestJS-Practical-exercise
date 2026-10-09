import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  info() {
    return {
      name: 'Library Books API',
      tryThese: [
        'GET /books',
        'GET /books?page=2&limit=5',
        'GET /books?author=adichie',
        'GET /books?genre=programming&available=true',
        'GET /books/1',
        'POST /books',
      ],
      hint: 'Open a new terminal and run "npm test" to check your solution.',
    };
  }

  @Post('/books')
  createBook() {
    return {
      'title': 'The Great Gatsby',
      'author': 'F. Scott Fitzgerald',
      'isbn': '9780743273565',
      'publishedYear': 1925,
      'genre': ['Fiction', 'Classic'],
      'available': true,
    };

  }
}
