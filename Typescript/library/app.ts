import { Category } from './enums';
import { Book, Librarian, Author } from './interfaces';

export class BookManager {
    books: Book[] = [
        {
            id: 1,
            title: 'Foo',
            author: 'Someone',
            available: true,
            category: Category.Syfy,
            pages: 300,
        },
        {
            id: 2,
            title: 'Bar',
            author: 'Someone else',
            available: true,
            category: Category.History,
        },
    ];

    getAllBooks(): Book[] {
        return this.books;
    }
    
    getBooksByCategory(category: Category = Category.Syfy): Book[] {
        return this.books.filter(book => book.category === category);
    }

    // Method overload
    getTitlesBy(author: string): string[];
    getTitlesBy(avail: boolean): string[];
    getTitlesBy(param: any): string[] {
        let titles: string[] = [];

        if (typeof param === 'string') {
            for (let book of this.books) {
                if (book.author === param) {
                    titles.push(book.title);
                }
            }
        } else if (typeof param === 'boolean') {
            for (let book of this.books) {
                if (book.available === param) {
                    titles.push(book.title);
                }
            }
        }

        return titles;
    }
}

let manager = new BookManager();
const books = manager.getAllBooks();

console.log(manager.getBooksByCategory(Category.History));
console.log(manager.getBooksByCategory(Category.Poetry));
console.log(manager.getBooksByCategory());
console.log(manager.getTitlesBy('Someone'));
console.log(manager.getTitlesBy(false));
console.log(manager.getTitlesBy(true));