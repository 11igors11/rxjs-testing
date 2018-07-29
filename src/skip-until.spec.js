import {cold, getTestScheduler} from 'jasmine-marbles';
import {interval, timer} from "rxjs";
import {skipUntil, take} from "rxjs/operators/index";

describe("Skip until", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 4, b: 5, c: 6};

        const expected = cold(`-----ab(c|)`, values);

        const notifier = timer(50, scheduler);

        const result = interval(10, scheduler)
            .pipe(skipUntil(notifier), take(3));

        expect(result).toBeObservable(expected);

    });
});