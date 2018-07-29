import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer} from "rxjs";
import {defaultIfEmpty, distinctUntilChanged, take, delayWhen} from "rxjs/operators/index";

describe("Take", () => {

    it("Emits expected values", () => {

        const values = {a: 0, b: 1, c: 2};

        const expected = cold(`(abc|)`, values);

        const result = range(0, 10)
            .pipe(take(3));

        expect(result).toBeObservable(expected);

    });
});