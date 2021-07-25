import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { Country } from '../../models/country';

import { RegionState } from '../../store/reducer/region.reducer';
import { 
  selectRegions,
  selectCountries,
  selectCountry
} from '../../store/selector/region.selector';
import { loadCountries, loadCountry } from '../../store/action/region.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  regions$: Observable<Array<string>> = EMPTY;
  countries$: Observable<Array<string | undefined>> = EMPTY;
  selectedCountry$: Observable<Country | null> = EMPTY;

  constructor(
    private store: Store<RegionState>
  ) {     
  }

  ngOnInit(): void {
    this.regions$ = this.store.pipe(select(selectRegions));
    this.countries$ = this.store.pipe(select(selectCountries));
    this.selectedCountry$ = this.store.pipe(select(selectCountry));
  }

  onRegionChange(region: string): void {
    this.store.dispatch(loadCountries({ region: region }))
  }

  onCountryChange(countryName: string): void {
    this.store.dispatch(loadCountry(countryName))
  }
}
