import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {Observable, from, EMPTY, range, interval} from "rxjs";
import {defaultIfEmpty, distinctUntilChanged, take, delay} from "rxjs/operators/index";

describe("Delay", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 1, c: 2};

        const expected = cold(`---ab(c|)`, values);

        const result = interval(10, scheduler)
            .pipe(take(3), delay(20, scheduler));

        expect(result).toBeObservable(expected);

    });
});