import {cold, getTestScheduler} from 'jasmine-marbles';
import {interval, timer} from "rxjs";
import {delayWhen, take} from "rxjs/operators/index";

describe("Delay when", () => {

    it("Emits expected values", () => {

        const scheduler = getTestScheduler();

        const values = {a: 0, b: 1, c: 2};

        const expected = cold(`---ab(c|)`, values);

        const delayForFiveSeconds = () => timer(20, scheduler);

        const result = interval(10, scheduler)
            .pipe(take(3), delayWhen(delayForFiveSeconds));

        expect(result).toBeObservable(expected);

    });
});