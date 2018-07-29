import * as Observable from "rxjs";
import {groupBy, mergeMap, toArray} from "rxjs/operators/index";

describe("Group by", () => {

    it("Emits expected values", (done) => {

        const numbers = [1, 2, 4, 3, 6];

        let anwser = true;

        const result = Observable.from(numbers)
            .pipe(
                groupBy(x => x % 2 === 0),
                mergeMap(group => group.pipe(toArray()))
            );

        result.subscribe(array => {
            if (array.length === 2 && array[0] % 2 === 0) {
                anwser = false;
            } else if (array.length === 3 && array[0] % 2 === 1) {
                anwser = false;
            }
        }, null, () => {
            expect(anwser).toBe(true);
            done();
        });

    });

});