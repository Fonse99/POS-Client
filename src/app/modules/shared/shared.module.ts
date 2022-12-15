import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { FieldAndValueComponent } from '../../components/field-and-value/field-and-value.component';
import { InputComponent } from '../../components/input/input.component';

@NgModule({
  declarations: [NavigationComponent, FieldAndValueComponent, InputComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavigationComponent, FieldAndValueComponent, InputComponent],
})
export class SharedModule {}
