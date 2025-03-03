import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1.component';
import { HeroComponent } from './hero/hero.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { SharedModule } from '../shared/shared.module'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Product1Component }
];

@NgModule({
  declarations: [
    Product1Component,
    HeroComponent,
    Section1Component,
    Section2Component,
    Section3Component
  ],
  imports: [
    CommonModule,
    SharedModule, // Now gets the directive from SharedModule
    RouterModule.forChild(routes)
  ],
  exports: [Product1Component]
})
export class Product1Module { }
