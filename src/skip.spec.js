import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer} from "rxjs";
import {defaultIfEmpty, distinctUntilChanged, take, delayWhen, skip} from "rxjs/operators/index";

describe("Skip", () => {

    it("Emits expected values", () => {

        const values = {a: 7, b: 8, c: 9};

        const expected = cold(`(abc|)`, values);

        const result = range(0, 10)
            .pipe(skip(7));

        expect(result).toBeObservable(expected);

    });
});