import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent {
  @Input() country: Country | null = null;
  constructor() { }

  getCurrencies(currencies: Array<any> | undefined): string {
    return currencies?.map(c => c.code).join(', ') ?? '';
  }
}
