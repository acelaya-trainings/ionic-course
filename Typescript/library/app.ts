enum Category {Syfy, History, Poetry};

function getAllBooks(): any[] {
    return [
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
}

let books = getAllBooks();

// Classic version
books.forEach(function (book) {
    console.log(book.title);
});

// Arrow version
books.forEach((book) => {
    console.log(book.title);
});

// Typescript version
for (let book of books) {
    console.log(book.title);
}
