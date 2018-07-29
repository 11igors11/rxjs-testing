import {cold} from 'jasmine-marbles';
import {throwError} from "rxjs";

describe("Throw", () => {

    it("Throws an error", () => {

        const expected = cold(`#`);

        const result = throwError(`error`);

        expect(result).toBeObservable(expected);

    });
});