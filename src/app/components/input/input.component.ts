import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = 'example...';
}
