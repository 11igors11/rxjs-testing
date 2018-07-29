import {cold} from 'jasmine-marbles';
import * as Observable from "rxjs";

describe("From", () => {

    it("Creates from array", () => {

        const array = [3, 2, 4];

        const values = {a: array[0], b: array[1], c: array[2]};

        const expected = cold(`(abc|)`, values);

        const result = Observable.from(array);

        expect(result).toBeObservable(expected);

    });

    it("Creates from promise", (done) => {

        const string = `hello`;

        const values = {a: string};

        const expected = cold(`a|`, values);

        const result = Observable.from(Promise.resolve(string));

        result.subscribe(r => {
            expect(r).toBe(string);
            done();
        });
    });


    it("Creates from string", () => {

        const string = `hello`;

        const values = {
            a: string[0],
            b: string[1],
            c: string[2],
            d: string[3],
            e: string[4]
        };

        const expected = cold(`(abcde|)`, values);

        const result = Observable.from(string);

        expect(result).toBeObservable(expected);

    });

});