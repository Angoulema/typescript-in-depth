namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {
            return 0.25 * daysLate;
        }
    }

    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }

    function privateFunc() {
        console.log('This is private function');
    }
}
