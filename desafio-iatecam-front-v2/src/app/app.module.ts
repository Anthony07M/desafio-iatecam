import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CategoriesPagesComponent } from './pages/categories-page/categories-pages.component';
import { ProductTableComponent } from './components/products/product-table/product-table.component';
import { ProductFormModalComponent } from './components/products/product-form-modal/product-form-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryFormModalComponent } from './components/categories/category-form-modal/category-form-modal.component';
import { CategoryTableComponent } from './components/categories/category-table/category-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsPageComponent,
    CategoriesPagesComponent,
    ProductTableComponent,
    ProductFormModalComponent,
    CategoryFormModalComponent,
    CategoryTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
