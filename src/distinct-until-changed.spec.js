import {cold, hot} from 'jasmine-marbles';
import {Observable, from} from "rxjs";
import {distinctUntilChanged} from "rxjs/operators/index";

describe("Distinct until changed", () => {

    it("Emits expected items", () => {

        const result = from([1, 2, 3, 3, 1, 2, 2, 5])
            .pipe(distinctUntilChanged());

        const values = {a: 1, b: 2, c: 3, d: 5};

        const expected = cold(`(abcabd|)`, values);

        expect(result).toBeObservable(expected);

    });
});