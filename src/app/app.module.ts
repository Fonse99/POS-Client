import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { PosComponent } from './pages/pos/pos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PosComponent,
    LoginComponent,
    DashboardComponent,
    InventoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
