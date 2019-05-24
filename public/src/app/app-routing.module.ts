import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditComponent } from './edit/edit.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'products',  children:[
      {path:"",component: ProductsComponent},
      {path:'edit/:id', component: EditComponent},
      {path: 'new', component: NewProductComponent}
  ]},
  {path: "**", component: ProductNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
