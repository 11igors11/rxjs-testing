import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {startWith, take, delay} from "rxjs/operators/index";

describe("Start with", () => {

    it("Prepend sync sequence", () => {

        const values = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

        const expected = cold(`(abcdef|)`, values);

        const result = Observable.range(4, 3)
            .pipe(startWith(1,2,3));

        expect(result).toBeObservable(expected);
    });
});