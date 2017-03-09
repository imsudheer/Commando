import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpHelper {
    // private filtersUrl = 'json/ReportsFilterHandlingFormat.json';  // URL to web API

    constructor(private http: Http) { }

    get(url: string, payload: any): Observable<any> {
        return this.http.get(url)
            //  .map(result => {"data":result.json(), "payload": payload})
            .map(function (result) {
                let output: { data: JSON, payLoad: Object };
                output = { data: result.json(), payLoad: payload }
                return output;
            })
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}