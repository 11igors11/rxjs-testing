import {cold} from 'jasmine-marbles';
import {range} from "rxjs";
import {skipWhile} from "rxjs/operators/index";

describe("Skip while", () => {

    it("Emits expected values", () => {

        const values = {a: 7, b: 8, c: 9};

        const expected = cold(`(abc|)`, values);

        const result = range(0, 10)
            .pipe(skipWhile(x => x < 7));

        expect(result).toBeObservable(expected);

    });
});