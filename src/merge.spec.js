import {cold, getTestScheduler} from 'jasmine-marbles';
import {merge, timer} from "rxjs";
import {take} from "rxjs/operators/index";

describe("Merge", () => {

    it("Emits expected values (async)", () => {

        const scheduler = getTestScheduler();

        const expected = cold(`-aab(b|)`, {a: 0, b: 1});

        const first = timer(10, 20, scheduler);
        const second = timer(20, 20, scheduler);

        const result = merge(first, second).pipe(take(4));

        expect(result).toBeObservable(expected);

    });
});