import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = 'example...';
  @Input() keyPressHandler = (_: any) => {};

  onKeyPress(event: KeyboardEvent) {
    let target = event.target as HTMLInputElement;
    if (event.key.toUpperCase() === 'ENTER') {
      this.keyPressHandler(target.value);
    }
  }
}
