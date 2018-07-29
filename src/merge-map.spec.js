import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer, concat, of} from "rxjs";
import {
    defaultIfEmpty,
    distinctUntilChanged,
    map,
    take,
    delayWhen,
    skip,
    last,
    concatAll,
    concatMap, mergeMap
} from "rxjs/operators/index";

describe("Merge map", () => {

    it("Emits expected values (async)", () => {

        const values = {a: 0, b: 1, c: 2, d: 3};

        const scheduler = getTestScheduler();

        const expected = cold(`-abc(d|)`, values);

        const result = interval(10, scheduler)
            .pipe(
                take(4),
                mergeMap(x => of(x)),
                );

        expect(result).toBeObservable(expected);

    });
});