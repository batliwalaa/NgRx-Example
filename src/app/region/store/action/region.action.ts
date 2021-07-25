import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country';

export const ActionTypes = {
  LOAD_COUNTRIES: '[Region] Load Countries',
  LOAD_COUNTRIES_SUCCESS: '[Region] Load Countries Success',
  LOAD_COUNTRY: '[Region] Load Country'
};

export const loadCountries = createAction(
  ActionTypes.LOAD_COUNTRIES,
  props<{region: string }>()
);

export const loadCountriesSuccess = createAction(
  ActionTypes.LOAD_COUNTRIES_SUCCESS,
  (countries: Array<Country>) => ({countries})
);

export const loadCountry = createAction(
  ActionTypes.LOAD_COUNTRY,
  (countryName: string) => ({countryName})
);
