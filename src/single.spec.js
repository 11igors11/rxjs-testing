import {cold} from 'jasmine-marbles';
import {range} from "rxjs";
import {single} from "rxjs/operators/index";

describe("Single", () => {

    it("Emits expected values", () => {

        const values = {a: 2};

        const expected = cold(`(a|)`, values);

        const result = range(1, 3)
            .pipe(single(x => x === 2));

        expect(result).toBeObservable(expected);

    });
});