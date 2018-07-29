import {cold} from 'jasmine-marbles';
import {range} from "rxjs";
import {ignoreElements} from "rxjs/operators/index";

describe("Ignore elements", () => {

    it("Emits expected values", () => {

        const expected = cold(`|`);

        const result = range(1, 3)
            .pipe(ignoreElements());

        expect(result).toBeObservable(expected);

    });
});