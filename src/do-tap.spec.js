import {cold, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {tap} from "rxjs/operators/index";

describe("Tap", () => {

    it("Do side effects", (done) => {

        let count = 0;

        const expectedCount = 3;

        const result = Observable.range(1, expectedCount)
            // in rxjs version <= 5 use `do` instead of `tap`
            .pipe(tap(()=>{
                count++;
            }))
            .subscribe(null,null, ()=>{
                expect(count).toBe(expectedCount);
                done();
            });
    });
});