import {cold, getTestScheduler} from 'jasmine-marbles';
import {from, timer} from "rxjs";
import {mergeAll, take} from "rxjs/operators/index";

describe("Merge all", () => {


    it("Emits expected values (async)", () => {

        const values = {a: 0, b: 1};

        const scheduler = getTestScheduler();

        const expected = cold(`-aab(b|)`, values);

        const result = from([
            timer(10, 20, scheduler).pipe(take(2)),
            timer(20, 20, scheduler).pipe(take(2))
        ])
            .pipe(
                mergeAll()
            );

        expect(result).toBeObservable(expected);

    });
});