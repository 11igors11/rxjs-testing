import {cold, getTestScheduler} from 'jasmine-marbles';
import {interval, timer} from "rxjs";
import {takeUntil} from "rxjs/operators/index";

describe("Take", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 1, c: 2};

        const expected = cold(`-abc|`, values);

        const notifier = timer(40, scheduler);

        const result = interval(10, scheduler)
            .pipe(takeUntil(notifier));

        expect(result).toBeObservable(expected);

    });
});