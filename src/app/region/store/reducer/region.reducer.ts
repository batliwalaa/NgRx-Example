import { createReducer, on } from '@ngrx/store';

import { Country } from '../../models/country';
import {
  ActionTypes,
  loadCountries,
  loadCountriesSuccess,
  loadCountry
} from '../action/region.action';

export const regionFeatureKey = 'region';

export interface RegionState {
  regions: Array<string>;
  regionCountries: { [key: string]: Array<Country> };
  selectedRegion: string;
  selectedCountry: string;
}

export const initialState: RegionState = {
  regions: ['Asia', 'Europe'],
  regionCountries: {},
  selectedRegion: '',
  selectedCountry: ''
};

export const loadCountriesReducer = createReducer(
  initialState,
  on(
    loadCountries, 
    (state, action) =>({ ...state, selectedRegion: action.region })
  )
);

export const loadCountryReducer = createReducer(
  initialState,
  on(
    loadCountry, 
    (state, action: any) => ({ ...state, selectedCountry: action.countryName })
  )
);

export const loadCountriesSuccessReducer = createReducer(
  initialState,
  on(
    loadCountriesSuccess, 
    (state, action: any) => (
      { 
        ...state, 
        regionCountries: {
          ...state.regionCountries,
          [state.selectedRegion]: <Country[]>action.countries.map((c: any) => 
              ({
                name: c.name,
                capital: c.capital,
                population: c.population,
                currencies: c.currencies,
                flag: c.flag
              })
          )
      }
    })
  )
);

export function reducer(state: RegionState = initialState, action: any): any {
  if (action.type === ActionTypes.LOAD_COUNTRIES) {
    return loadCountriesReducer(state, action);
  } else if (action.type === ActionTypes.LOAD_COUNTRIES_SUCCESS) {
    return loadCountriesSuccessReducer(state, action);
  } else if(action.type === ActionTypes.LOAD_COUNTRY) {
    return loadCountryReducer(state, action);
  } else {
    return state;
  }
};