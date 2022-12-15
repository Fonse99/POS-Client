import { Component } from '@angular/core';
import { PosService } from './pos.service';

@Component({
  selector: 'pg-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
})
export class PosComponent {
  table_content: any[] = [];

  constructor(private posService: PosService) {}

  findProduct() {
    return (code: string) => {
      this.posService.findProductByBarcode(code).subscribe((x) => {
        console.log(x);
        this.table_content.push(x);
      });
    };
  }
}
