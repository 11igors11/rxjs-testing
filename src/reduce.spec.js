import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {sample, take, reduce} from "rxjs/operators/index";

describe("Reduce", () => {

    it("Emits expected values", () => {

        const expected = cold(`(a|)`, {a: 6});

        const result = Observable.range(1,3)
            .pipe(reduce((acc, current)=> acc+current));

        expect(result).toBeObservable(expected);

    });

});