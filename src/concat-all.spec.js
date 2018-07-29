import {cold, getTestScheduler} from 'jasmine-marbles';
import {from, interval, of} from "rxjs";
import {concatAll, map, take} from "rxjs/operators/index";

describe("Concat all", () => {

    it("Emits expected values (sync)", () => {

        const values = {a: 1, b: 2, c: 3, d: 4};

        const expected = cold(`(abcd|)`, values);

        const result = from([
            of(values.a),
            of(values.b),
            of(values.c),
            of(values.d),
        ])
            .pipe(concatAll());

        expect(result).toBeObservable(expected);

    });

    it("Emits expected values (async)", () => {

        const values = {a: 0, b: 1, c: 2, d: 3};

        const scheduler = getTestScheduler();

        const expected = cold(`-abc(d|)`, values);

        const result = interval(10, scheduler)
            .pipe(
                take(4),
                map(x => of(x)),
                concatAll()
                );

        expect(result).toBeObservable(expected);

    });
});