import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType, concatLatestFrom } from "@ngrx/effects";
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { RegionService } from "../../services/region.service";
import { ActionTypes, loadCountriesSuccess }  from '../action/region.action';
import { select, Store } from "@ngrx/store";
import { RegionState } from "../reducer/region.reducer";
import { selectCountryList } from "../selector/region.selector";

@Injectable({
    providedIn: 'root'
})
export class RegionEffects {
    constructor(
        private actions$: Actions,
        private regionService: RegionService,
        private store: Store<RegionState>
    ) {}
    loadCountries$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.LOAD_COUNTRIES),
            concatLatestFrom(() => this.store.pipe(select(selectCountryList))),
            filter(([_, countries]) => !countries || countries.length === 0),
            mergeMap(([action]) => {
                return this.regionService.getCountries((<any>action).region).pipe(
                    map(countries => loadCountriesSuccess( countries)),
                    catchError(() => EMPTY));
            }))
    });
}
