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
    concatMap
} from "rxjs/operators/index";

describe("Concat map", () => {

    it("Emits expected values (sync)", () => {

        const values = {a: 2, b: 4, c: 6, d: 8};

        const expected = cold(`(abcd|)`, values);

        const result = from([1,2,3,4])
            .pipe(concatMap(x=>of(x*2)));

        expect(result).toBeObservable(expected);

    });

    it("Emits expected values (async)", () => {

        const values = {a: 0, b: 1, c: 2, d: 3};

        const scheduler = getTestScheduler();

        const expected = cold(`-abc(d|)`, values);

        const result = interval(10, scheduler)
            .pipe(
                take(4),
                concatMap(x => of(x)),
                );

        expect(result).toBeObservable(expected);

    });
});