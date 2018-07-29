import {cold, getTestScheduler} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {catchError, first, timeout} from "rxjs/operators/index";

describe("Timeout", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const expected = cold(`-----#`);

        const result = Observable.timer(100, scheduler)
            .pipe(first(),
                timeout(50, scheduler),
                catchError(() => Observable.throwError(`error`)));

        expect(result).toBeObservable(expected);


    });

});