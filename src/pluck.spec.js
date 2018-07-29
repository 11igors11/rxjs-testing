import {cold, hot} from 'jasmine-marbles';
import * as Observable from "rxjs";
import {pluck, tap} from "rxjs/operators/index";

describe("Pluck", () => {

    it("Extract field from object", (done) => {

        const data = `target data`;
        const object = {
          child: {
              data
          }
        };

        const result = Observable.of(object)
            .pipe(pluck(`child`, `data`))
            .subscribe((value) => {
                expect(value).toBe(data);
                done();
            });
    });
});