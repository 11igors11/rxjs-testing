import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {sample, take, reduce, scan} from "rxjs/operators/index";

describe("Scan", () => {

    it("Emits expected values", () => {

        const expected = cold(`(abc|)`, {a: 1, b: 3, c: 6});

        const result = Observable.range(1,3)
            .pipe(scan((acc, current)=> acc+current));

        expect(result).toBeObservable(expected);

    });

});