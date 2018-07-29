import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer} from "rxjs";
import {defaultIfEmpty, takeWhile, takeUntil, distinctUntilChanged, take, delayWhen} from "rxjs/operators/index";

describe("Take", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 1, c: 2};

        const expected = cold(`-abc|`, values);

        const notifier = timer(40, scheduler);

        const result = interval(10, scheduler)
            .pipe(takeUntil(notifier));

        expect(result).toBeObservable(expected);

    });
});