import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'info', component: InfoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
