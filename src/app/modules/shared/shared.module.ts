import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { AppRoutingModule } from '../routing/app-routing.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [NavigationComponent],
})
export class SharedModule {}