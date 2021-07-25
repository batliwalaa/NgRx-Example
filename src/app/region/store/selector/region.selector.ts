import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegion from '../reducer/region.reducer';

export const selectRegionState = createFeatureSelector<fromRegion.RegionState>(
    fromRegion.regionFeatureKey
);

export const selectRegions = createSelector(
    selectRegionState,
    (state: any) => {
        return state.regions;
    }
);

export const selectCountries = createSelector(
    selectRegionState,
    (state: fromRegion.RegionState) => 
        state.regionCountries[state.selectedRegion]?.map(c => c.name) ?? []
);

export const selectCountryList = createSelector(
    selectRegionState,
    (state: fromRegion.RegionState) => 
        state.regionCountries[state.selectedRegion] ?? []
);

export const selectCountry = createSelector(
    selectRegionState,
    (state: fromRegion.RegionState) => 
        state.selectedCountry 
            && state.selectedCountry.length > 0 ? 
                (state.regionCountries[state.selectedRegion]
                    ?.filter(c => c.name === state.selectedCountry)[0]) : null
);
