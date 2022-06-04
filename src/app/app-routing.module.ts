import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'items'
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'info-item/:id',
    component: InfoItemComponent
  },
  {
    path: '**',
    redirectTo: 'items'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
