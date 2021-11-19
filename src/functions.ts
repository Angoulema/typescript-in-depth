/* eslint-disable no-redeclare */

import { RefBook } from './classes';
import { Category } from './enums';
import { Author, Book, Callback, LibMgrCallback, Librarian, Logger } from './intefaces';
import { BookOrUndefined, BookProperties, PersonBook } from './types';

export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()) {
    console.log(`Number of books: ${books.length}`);

    const firstAvailable = books.find((book) => book.available === true)?.title;

    console.log(`First available book: ${firstAvailable}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const { title, author } = books[index];

    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, BigInt(0));
}
// =====

export function createCustomerId(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCutomer(name: string, age?: number, city?: string): void {
    console.log(`Customer's name: ${name}`);

    if (age) {
        console.log(`Customer's age: ${age}`);
    }

    if (city) {
        console.log(`Customer's city: ${city}`);
    }
}

export function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer's name: ${customer}`);

    return bookIDs
        .map(id => getBookById(id))
        .filter(book => book.available)
        .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        return books.filter(book => book.available === available && book.id === id).map(book => book.title);
    }
}
// === 03.04
export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return title.split('').reverse().join('');
}
// === task 04
export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

// 04.05
// export function getProperty(book: Book, property: BookProperties) {
//     if (typeof book[property] === 'function') {
//         return book[property]['name'];
//     }

//     return book[property];
// }

function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

// task07
export function getProperty<TObject, TKey extends keyof TObject>(object: TObject, property: TKey): TObject[TKey] | string {
    if (typeof object[property] === 'function') {
        return object[property]['name'];
    }

    return object[property];
}

// task09
// export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch(err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<void> {
    const titles =  await getBooksByCategoryPromise(category);
    console.log(titles);
    // const titles1 =  await getBooksByCategoryPromise(category);
    // const titles2 =  await getBooksByCategoryPromise(category);

    // const titles3 = await Promise.all([getBooksByCategoryPromise(category), getBooksByCategoryPromise(category)]);

    // console.log(titles1, titles2);
    // console.log(titles3);
}
