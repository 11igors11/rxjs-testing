import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval, timer, throwError} from "rxjs";
import {defaultIfEmpty, takeWhile, takeUntil, distinctUntilChanged, take, delayWhen} from "rxjs/operators/index";

describe("Throw", () => {

    it("Throws an error", () => {

        const expected = cold(`#`);

        const result = throwError(`error`);

        expect(result).toBeObservable(expected);

    });
});