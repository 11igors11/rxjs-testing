import {cold} from 'jasmine-marbles';
import * as Observable from "rxjs";

describe("Of", () => {

    it("Creates from number", () => {

        const number = 11;

        const values = {a: number};

        const expected = cold(`(a|)`, values);

        const result = Observable.of(number);

        expect(result).toBeObservable(expected);

    });

    it("Creates from array", () => {

        const array = [3, 2, 4];

        const values = {a: array};

        const expected = cold(`(a|)`, values);

        const result = Observable.of(array);

        expect(result).toBeObservable(expected);

    });

    it("Creates from string", () => {

        const string = `hello`;

        const values = {a: string};

        const expected = cold(`(a|)`, values);

        const result = Observable.of(string);

        expect(result).toBeObservable(expected);

    });

});