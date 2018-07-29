import {cold, getTestScheduler} from 'jasmine-marbles';
import {interval, range} from "rxjs";
import {last, take} from "rxjs/operators/index";

describe("Last", () => {

    it("Emits expected values (sync)", () => {

        const values = {a: 9};

        const expected = cold(`(a|)`, values);

        const result = range(0, 10)
            .pipe(last());

        expect(result).toBeObservable(expected);

    });

    it("Emits expected values (async)", () => {

        const scheduler = getTestScheduler();

        const values = {a: 4};

        const expected = cold(`-----(a|)`, values);

        const result = interval(10, scheduler)
            .pipe(take(5), last());

        expect(result).toBeObservable(expected);

    });
});