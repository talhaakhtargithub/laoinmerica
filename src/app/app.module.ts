import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Feature Modules
import { SharedModule } from './shared/shared.module'; 
import { HomeModule } from './home/home.module'; 
import { QuestionsModule } from './questions/questions.module'; 
import { ProductsModule } from './products/products.module'; 
import { ContactsModule } from './contacts/contacts.module';
import {AboutusModule}   from './aboutus/aboutus.module'
import {RefundModule} from './refund/refund.module'
import{Product1Module} from './product1/product1.module';

// Define application routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },  // Lazy load ContactsModule
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
  { path: 'refund', loadChildren: () => import('./refund/refund.module').then(m => m.RefundModule) },
  { path: 'product1', loadChildren: () => import('./product1/product1.module').then(m => m.Product1Module) },
  { path: 'product2', loadChildren: () => import('./product2/product2.module').then(m => m.Product2Module) },
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    SharedModule, 
    HomeModule,
    QuestionsModule,
    ProductsModule,
    ContactsModule,
    AboutusModule,
    RefundModule,
    Product1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
