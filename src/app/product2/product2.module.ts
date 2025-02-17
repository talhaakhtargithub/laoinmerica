import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product2Component } from './product2.component';
import { HeroComponent } from './hero/hero.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { SharedModule } from '../shared/shared.module'; 
import { RouterModule, Routes } from '@angular/router';

// Define routes for QuestionsModule
const routes: Routes = [
  { path: '', component: Product2Component }
];

@NgModule({
  declarations: [
    Product2Component,
    HeroComponent,
    Section1Component,
    Section2Component,
    Section3Component
  ],
  imports: [
    CommonModule,
    SharedModule, 
    RouterModule.forChild(routes) // Use forChild for feature modules
  ],
  exports: [
    Product2Component 
  ]
})
export class Product2Module { }
