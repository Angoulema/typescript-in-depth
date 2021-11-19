import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from '../intefaces';

// @sealed('UniversityLibrarian') // string as alias?
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    public department: string;
    @format() name: string;
    public email: string;
    constructor() {
        console.log('Test');
    }
    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    // @writable(true)
    asistFaculty() {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}

export { UniversityLibrarian };
