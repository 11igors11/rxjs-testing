import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer} from "rxjs";
import {defaultIfEmpty, takeWhile, takeUntil, skipUntil, distinctUntilChanged, take, delayWhen} from "rxjs/operators/index";

describe("Skip until", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 4, b: 5, c: 6};

        const expected = cold(`-----ab(c|)`, values);

        const notifier = timer(50, scheduler);

        const result = interval(10, scheduler)
            .pipe(skipUntil(notifier), take(3));

        expect(result).toBeObservable(expected);

    });
});