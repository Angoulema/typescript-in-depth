import { Category } from './enums';

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    markDamaged?: DamageLogger;
    // markDamaged?: (reason: string) => void;
    // markDamaged(reason: string): void;
}

interface Person {
    name: string;
    email: string;
}
interface Author extends Person {
    numBooksPublished: number;
}
interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}


interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

interface Callback<T> {
    (err: Error, data: T): void;
}

export { Book, Person, Author, Librarian, DamageLogger as Logger, Magazine, ShelfItem, LibMgrCallback, Callback};
