import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {take, map} from "rxjs/operators/index";

describe("Map", () => {

    it("Emits expected values (sync)", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 2, c: 4, d: 6, e: 8};

        const expected = cold(`(abcde|)`, values);

        const result = Observable.range(0, 5).pipe(map(x => x * 2));

        expect(result).toBeObservable(expected);

    });

    it("Emits expected values (async)", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 2, c: 4, d: 6, e: 8};

        const expected = cold(`--a-b-c-d-(e|)`, values);

        const result = Observable.interval(20, scheduler)
            .pipe(take(5), map(x => x * 2));

        expect(result).toBeObservable(expected);


    });
});