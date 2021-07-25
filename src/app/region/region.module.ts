import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import { RegionRoutingModule } from './region-routing.module';
import {regionFeatureKey, reducer} from './store/reducer/region.reducer';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HomeComponent } from './components/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from './store/effects/region.effects';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    DropdownComponent,
    HomeComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RegionRoutingModule,
    StoreModule.forFeature(regionFeatureKey, reducer),
    EffectsModule.forFeature([RegionEffects])
  ]
})
export class RegionModule { }
