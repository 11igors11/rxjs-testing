import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer, concat} from "rxjs";
import {defaultIfEmpty, distinctUntilChanged, take, delayWhen, skip, last} from "rxjs/operators/index";

describe("Concat", () => {

    it("Emits expected values (sync)", () => {

        const values = {a: 1, b: 2, c: 3, d: 4};

        const first = from([values.a,values.b]);
        const second = from([values.c, values.d]);

        const expected = cold(`(abcd|)`, values);

        const result = concat(first, second);

        expect(result).toBeObservable(expected);

    });

    it("Emits expected values (async)", () => {

        const values = {a: 0, b: 1};

        const scheduler = getTestScheduler();

        const first = interval(10, scheduler).pipe(take(2));
        const second = interval(10, scheduler).pipe(take(2));

        const expected = cold(`-aba(b|)`, values);

        const result = concat(first, second);

        expect(result).toBeObservable(expected);

    });
});