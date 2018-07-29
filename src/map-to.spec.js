import {cold, getTestScheduler} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {mapTo, take} from "rxjs/operators/index";

describe("Map to", () => {

    it("Emits expected values (sync)", () => {

        const scheduler = getTestScheduler();

        const number = 12;

        const values = {a: number, b: number, c: number, d: number, e: number};

        const expected = cold(`(abcde|)`, values);

        const result = Observable.range(0, 5).pipe(mapTo(number));

        expect(result).toBeObservable(expected);

    });

    it("Emits expected values (async)", () => {

        const scheduler = getTestScheduler();

        const number = 12;

        const values = {a: number, b: number, c: number, d: number, e: number};

        const expected = cold(`--a-b-c-d-(e|)`, values);

        const result = Observable.interval(20, scheduler)
            .pipe(take(5), mapTo(number));

        expect(result).toBeObservable(expected);


    });
});