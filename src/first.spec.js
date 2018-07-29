import {cold} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {first} from "rxjs/operators/index";

describe("First", () => {

    it("Takes first item", () => {

        const firstItem = 33;

        const array = [firstItem, 2, 4];

        const values = {a: firstItem};

        const expected = cold(`(a|)`, values);

        const result = Observable.from(array)
            .pipe(first());

        expect(result).toBeObservable(expected);

    });

    it("Takes first item which matches a predicate", (done) => {

        const result = Observable.range(1, 10)
            .pipe(first(x => x % 5 === 0))
            .subscribe(value => {
                expect(value).toBe(5);
                done();
            });
    });


    it("Takes first item which matches a predicate, but there is no such item", (done) => {

        const result = Observable.range(1, 10)
            .pipe(first(x => x % 15 === 0))
            .subscribe(null, () => {
                done();
            });
    });
});