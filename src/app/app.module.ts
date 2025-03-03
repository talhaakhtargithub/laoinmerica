import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MagnifiersDirective } from 'src/app/magnifier.directive';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'; 

// Define application routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
  { path: 'refund', loadChildren: () => import('./refund/refund.module').then(m => m.RefundModule) },
  { path: 'product1', loadChildren: () => import('./product1/product1.module').then(m => m.Product1Module) },
  { path: 'product2', loadChildren: () => import('./product2/product2.module').then(m => m.Product2Module) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    MagnifiersDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Automatically scrolls to the top on route change.
    }), 
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
