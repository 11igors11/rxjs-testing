import * as Observable from "rxjs";
import {every} from "rxjs/operators/index";

describe("Every", () => {

    it("Returns true", (done) => {

        Observable.range(1, 5)
            .pipe(every(x => x > 0))
            .subscribe((result) => {
                expect(result).toBe(true);
                done();
            });

    });

    it("Returns false", (done) => {

        Observable.from([2, -1, 4])
            .pipe(every(x => x > 0))
            .subscribe((result) => {
                expect(result).toBe(false);
                done();
            });

    });
});