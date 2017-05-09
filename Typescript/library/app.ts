enum Category {Syfy, History, Poetry};

export class BookManager {
    books: any[] = [
        {
            title: 'Foo',
            author: 'Someone',
            available: true,
            category: Category.Syfy,
        },
        {
            title: 'Bar',
            author: 'Someone else',
            available: true,
            category: Category.History,
        },
    ];

    getAllBooks(): any[] {
        return this.books;
    }
    
    getBooksByCategory(category: Category = Category.Syfy): any[] {
        return this.books.filter(book => book.category === category);
    }
}

let manager = new BookManager();
const books = manager.getAllBooks();

console.log(manager.getBooksByCategory(Category.History));
console.log(manager.getBooksByCategory(Category.Poetry));
console.log(manager.getBooksByCategory());
