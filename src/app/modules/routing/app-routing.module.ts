import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { InventoryComponent } from 'src/app/components/inventory/inventory.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { PosComponent } from 'src/app/pages/pos/pos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'sales',
        component: PosComponent,
      },
      {
        path: 'inventory',
        component: InventoryComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [HomeComponent],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
