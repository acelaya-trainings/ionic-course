import { Category } from './enums';

export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
}

interface Person {
    name: string;
    email: string;
}

export interface Author extends Person {
    numPublishedBooks: number;
}

export interface Librarian extends Person {
    department: string;
}
