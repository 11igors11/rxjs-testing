import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {take} from "rxjs/operators/index";

describe("Empty", () => {

    it("Emits nothing (operator)", () => {

        const expected = cold(`|`);

        const result = Observable.empty();

        expect(result).toBeObservable(expected);

    });

    it("Emits nothing (constant)", () => {

        const expected = cold(`|`);

        const result = Observable.EMPTY;

        expect(result).toBeObservable(expected);

    });

});