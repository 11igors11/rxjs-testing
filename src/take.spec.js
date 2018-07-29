import {cold} from 'jasmine-marbles';
import {range} from "rxjs";
import {take} from "rxjs/operators/index";

describe("Take", () => {

    it("Emits expected values", () => {

        const values = {a: 0, b: 1, c: 2};

        const expected = cold(`(abc|)`, values);

        const result = range(0, 10)
            .pipe(take(3));

        expect(result).toBeObservable(expected);

    });
});