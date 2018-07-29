import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {take} from "rxjs/operators/index";

describe("Timer", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 1, c: 2, d: 3, e: 4};

        const expected = cold(`---a-b-c-d-(e|)`, values);

        const result = Observable.timer(30, 20, scheduler)
            .pipe(take(5));

        expect(result).toBeObservable(expected);

    });

});