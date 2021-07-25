import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Input, Output, EventEmitter, Component, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements ControlValueAccessor {
  @Input() options: Observable<Array<string | undefined>> = EMPTY;
  @Input() id = '';
  @Input() label = '';
  @Output() optionSelected: EventEmitter<string> = new EventEmitter();
  @Input() ariaLabel = '';
  @Input() placeHolder = '';

  constructor() {}

  public set value(v: any) {
    this.writeValue(v);
  }
  public get value(): any {
    return this.ctrlValue;
  }

  private ctrlValue: string | undefined = '';

  private onChange: (v: string) => string = () => '';
  private onTouched: () => string = () => '';

  public writeValue(value: any): void {
    this.ctrlValue = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public itemChange($event: any) {
    this.writeValue($event.target.value);

    if (this.onChange) {
      this.onChange(this.value);
    }
    if (this.onTouched) {
      this.onTouched();
    }
    this.optionSelected.emit(this.ctrlValue);
  }
}
