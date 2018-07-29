import {cold, hot} from 'jasmine-marbles';
import {Observable} from "rxjs";

describe("Creates", () => {

    it("Next", (done) => {

        Observable.create(observer => {
            observer.next();
        }).subscribe(() => {
            done();
        });

    });

    it("Error", (done) => {

        Observable.create(observer => {
            observer.error();
        }).subscribe(null, () => {
            done();
        });

    });

    it("Complete", (done) => {

        Observable.create(observer => {
            observer.complete();
        }).subscribe(null, null, () => {
            done();
        });

    });
});