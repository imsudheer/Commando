import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Headers, RequestOptions } from '@angular/http';
// import { FilterObject } from './../bo/app.bo.filter-object';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpHelper } from './../common/HttpHelper';

@Injectable()
export class FilterService {
    private filtersUrl = 'json/ReportsFilterHandlingFormat.json';  // URL to web API
    // private CitiesUrl = 'json/data/city.json';  // URL to web API
    // private CountriesUrl = 'json/data/country.json';  // URL to web API
    // private RegionsUrl = 'json/data/region.json';  // URL to web API
    // private UsersUrl = 'json/data/users.json';  // URL to web API

    constructor(private httpHelper: HttpHelper) { }

    getFilters(): Observable<any> {
        return this.httpHelper.get(this.filtersUrl, null);
    }
    get(url: string, payLoad: any): Observable<any> {
        return this.httpHelper.get(url, payLoad);
    }
}
