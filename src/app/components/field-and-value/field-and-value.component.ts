import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-field-and-value',
  templateUrl: './field-and-value.component.html',
  styleUrls: ['./field-and-value.component.css'],
})
export class FieldAndValueComponent {
  @Input() field: string = 'example';
  @Input() value: string = '23456789';

  constructor() {}
}
