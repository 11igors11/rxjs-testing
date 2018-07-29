import {cold, getTestScheduler} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {filter, take} from "rxjs/operators/index";

describe("Filter", () => {

    it("Emits only even (sync)", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 2, c: 4};

        const expected = cold(`(abc|)`, values);

        const result = Observable.range(0, 5).pipe(filter(x => x % 2 === 0));

        expect(result).toBeObservable(expected);

    });

    it("Emits only even (async)", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 2, c: 4};

        const expected = cold(`--a---b---(c|)`, values);

        const result = Observable.interval(20, scheduler)
            .pipe(take(5), filter(x => x % 2 === 0));

        expect(result).toBeObservable(expected);


    });
});