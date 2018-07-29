import {cold, hot} from 'jasmine-marbles';
import {Observable, range} from "rxjs";
import {ignoreElements, single} from "rxjs/operators/index";

describe("Ignore elements", () => {

    it("Emits expected values", () => {

        const expected = cold(`|`);

        const result = range(1, 3)
            .pipe(ignoreElements());

        expect(result).toBeObservable(expected);

    });
});