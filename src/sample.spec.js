import {cold, getTestScheduler} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {sample, take} from "rxjs/operators/index";

describe("Sample", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 2, c: 4, d: 6, e: 8};

        const expected = cold(`--a-b-c-d-(e|)`, values);

        const result = Observable.interval(10, scheduler)
            .pipe(take(10), sample(Observable.interval(20, scheduler)));

        expect(result).toBeObservable(expected);

    });

});