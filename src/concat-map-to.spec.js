import {cold, getTestScheduler} from 'jasmine-marbles';
import {from, interval, of} from "rxjs";
import {concatMapTo, take} from "rxjs/operators/index";

describe("Concat map to", () => {

    it("Emits expected values (sync)", () => {

        const values = {a: 22};

        const expected = cold(`(aaaa|)`, values);

        const result = from([1, 2, 3, 4])
            .pipe(concatMapTo(of(values.a)));

        expect(result).toBeObservable(expected);

    });

    it("Emits expected values (async)", () => {

        const values = {a: 22};

        const scheduler = getTestScheduler();

        const expected = cold(`-aaa(a|)`, values);

        const result = interval(10, scheduler)
            .pipe(
                take(4),
                concatMapTo(of(22)),
            );

        expect(result).toBeObservable(expected);

    });
});