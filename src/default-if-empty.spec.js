import {EMPTY} from "rxjs";
import {defaultIfEmpty} from "rxjs/operators/index";

describe("Default if empty", () => {

    it("Emits expected items", (done) => {

        const number = 1241;

        EMPTY
            .pipe(defaultIfEmpty(number))
            .subscribe(value => {
                expect(value).toBe(number);
                done();
            })

    });
});