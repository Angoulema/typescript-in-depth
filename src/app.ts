import { Category } from './enums';
import {
    logFirstAvailable, getAllBooks, logBookTitles, getBookTitlesByCategory, getBookAuthorByIndex,
    printBook, getProperty, calcTotalPages, createCustomerId, createCutomer, getBookById, сheckoutBooks,
    getTitles, bookTitleTransform, printRefBook, purge, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults
} from './functions';
import { Author, Book, Librarian, Logger, Magazine } from './intefaces';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import { ReferenceItem, UL, RefBook, Shelf } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason) => {
        console.log(`Damaged: ${reason}`);
    }
};

const logDamage: Logger = (reason) => {
    console.log(`Damaged: ${reason}`);
};

const favoriteAuthor: Author = {
    name: 'J R R Tolkien',
    email: 'JRRT@mail.mail',
    numBooksPublished: 50
};

const favoriteLibrarian: Librarian = {
    name: 'Alena',
    email: 'Alena@lib.com',
    department: 'dep',
    assistCustomer: null
};

// 04.04
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
// console.log(offer.book.authors?.[0]);
// a.	offer.magazine
// b.	offer.magazine.getTitle()
// c.	offer.book.getTitle()
// d.	offer.book.authors[0]

// task0201
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory());
// const result = getBookAuthorByIndex(1);
// console.log(result);

// const resultq1 = calcTotalPages();
// console.log(resultq1);

// task0301
// const myID = createCustomerId('Mai', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerId;
// console.log(idGenerator('Mary', 2));

// task0302
// createCutomer('Mary', 15);
// const bookId = getBookById(1);
// console.log(bookId);
// const myBooks = сheckoutBooks('Anna', 1, 2, 3, 4);
// console.log(myBooks);

// task0303
// const checkedOutBooks = getTitles(true);
// console.log(checkedOutBooks);

// task0304
// console.log(bookTitleTransform('Ladies in Lilac'));
// console.log(bookTitleTransform(400));

// task04
// printBook(myBook);
// myBook.markDamaged('Missing book cover');

// logDamage('Missing book cover');

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'id'));

// const ref = new ReferenceItem(1, 'The Hobbit', 1937);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Bloombery';
// console.log(ref.publisher);
// console.log(ref.getID());

// task05/01-04
// const refBook = new RefBook(2, 'the Hobbit', 1937, 1);
// console.log(refBook);
// refBook.printItem();

// получение ссылок на объекты прототипа
// const pr1 = Object.getPrototypeOf(refBook);
// console.log(pr1);
// const pr2 = Object.getPrototypeOf(pr1);
// console.log(pr2);
// refBook.printCitation();

// const favouriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favouriteLibrarian.name = 'Maria';
// favouriteLibrarian.assistCustomer('Jane');


// task 05.05
const personBook: PersonBook = {
    name: 'Mary',
    email: 'Mary@mail.mail',
    id: 1,
    title: 'Typescript',
    category: Category.TypeScript,
    author: 'Noname',
    available: true
};

// task06
// printRefBook(refBook);
const uLibrarian = new UL.UniversityLibrarian();
// printRefBook(uLibrarian);

const flag = false;

// if (flag) {
//     const modules = await import('./classes');
//     const myReader = new modules.Reader();
//     myReader.name = 'Kate';
//     myReader.take(getAllBooks()[1]);
//     console.log(myReader);
// }

if (flag) {
    import('./classes')
        .then(modules => {
            const myReader = new modules.Reader();
            myReader.name = 'Kate';
            myReader.take(getAllBooks()[1]);
            console.log(myReader);
        })
        .catch(err => console.log(err));
}

// import { Library } from './classes/library';
// import type { Library } from './classes/library';
import { Library } from './classes';
import { UniversityLibrarian } from './classes/university-librarian';
import Encyclopedia from './classes/encyclopedia';
// const library = new Library();
const lib: Library = {
    id: 1,
    name: 'Juvenile',
    address: '11-011 Warsaw'
};

// task07
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result = purge<Book>(inventory);
// console.log(result);
// const result2 = purge([1, 2, 3, 4, 5]);
// console.log(result2);

const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineSchelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineSchelf.add(mag));
// console.log(magazineSchelf.getFirst().title);

// magazineSchelf.printTitles();
// console.log(magazineSchelf.find('Five Points'));

// console.log(getProperty<Book, 'id'>(getAllBooks()[0], 'id'));
// console.log(getProperty(getAllBooks()[0], 'available'));

// const specialBook: BookRequiredFields = {
//     author: 'Stephen',
//     available: true,
//     category: Category.NodeJS,
//     id: 5,
//     markDamaged: null,
//     title: 'Lol',
//     pages: 200
// };

// const updatedBook: UpdatedBook = {};

// const params: Parameters<СreateCustomerFunctionType> = ['Jane'];
// let params1: Parameters<typeof createCutomer>;

// createCutomer(...params);


// === task 08 ===
// const librarianNew = new UniversityLibrarian();
// console.log(librarianNew);
// UL.UniversityLibrarian['a'] = 'A';
// const prLib = Object.getPrototypeOf(librarianNew);
// prLib.assistCustomer = function() {};

// const librarianLog = new UniversityLibrarian();
// console.log(librarianLog);
// librarianLog.name = 'Anna';
// librarianLog['printLibrarian']();


// const methodLib = new UniversityLibrarian();
// methodLib.asistFaculty = null;
// methodLib.teachCommunity = null;

// const newEncyclopedia = new RefBook(5, 'Hobbit', 1937, 1);
// newEncyclopedia.printItem();

// const UL1 = new UniversityLibrarian();
// UL1.name = 'Gertrude';
// console.log(UL1.name);
// UL1.assistCustomer('Jorik');
// console.log(UL1);

// const greatBook = new RefBook(5, 'Hobbit', 1937, 1);
// greatBook.copies = 5;
// console.log(greatBook);

// task09
// console.log('Begin');
// getBooksByCategory(Category.Software, logCategorySearch);
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// console.log('End');

// console.log('Begin 0901');
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(quantity => console.log(quantity))
//     .catch(err => console.log(err));
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(quantity => console.log(quantity))
//     .catch(err => console.log(err));
// console.log('End 0901');

console.log('Begin 0902');
logSearchResults(Category.JavaScript)
    .catch(err => console.log(err));
logSearchResults(Category.Software)
    .catch(err => console.log(err));
console.log('End 0902');
