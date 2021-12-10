import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './Components/product-create/product-create.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  { path : 'products', component : ProductListComponent},
  { path : 'products/:id', component : ProductDetailsComponent},
  {path: 'create', component : ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
