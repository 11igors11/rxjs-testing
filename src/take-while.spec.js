import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer} from "rxjs";
import {defaultIfEmpty, takeWhile, takeUntil, distinctUntilChanged, take, delayWhen} from "rxjs/operators/index";

describe("Take", () => {

    it("Emits expected values", () => {

        const values = {a: 0, b: 1};

        const expected = cold(`(ab|)`, values);

        const result = range(0, 10)
            .pipe(takeWhile(x => x < 2));

        expect(result).toBeObservable(expected);

    });
});