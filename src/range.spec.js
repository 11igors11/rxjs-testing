import {cold} from 'jasmine-marbles';
import * as Observable from "rxjs";

describe("Range", () => {

    it("Emits expected values", () => {

        const values = {a: 1, b: 2, c: 3};

        const expected = cold(`(abc|)`, values);

        const result = Observable.range(1, 3);

        expect(result).toBeObservable(expected);

    });

});