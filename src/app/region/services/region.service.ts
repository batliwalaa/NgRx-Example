import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

import { Observable } from "rxjs";
import { Country } from "../models/country";

@Injectable({
    providedIn: 'root'
})
export class RegionService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getCountries(region: string): Observable<Array<Country>> {
        return this.httpClient.get<Array<Country>>(
            `https://restcountries.eu/rest/v2/region/${region}`
        );
    }
}