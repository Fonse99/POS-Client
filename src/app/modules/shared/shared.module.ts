import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { FieldAndValueComponent } from '../../components/field-and-value/field-and-value.component';

@NgModule({
  declarations: [NavigationComponent, FieldAndValueComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavigationComponent, FieldAndValueComponent],
})
export class SharedModule {}
