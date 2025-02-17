import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { HeroComponent } from './hero/hero.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { SharedModule } from '../shared/shared.module'; 
import { RouterModule, Routes } from '@angular/router';

// Define routes for QuestionsModule
const routes: Routes = [
  { path: '', component: QuestionsComponent }
];

@NgModule({
  declarations: [
    QuestionsComponent,
    HeroComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    CommonModule,
    SharedModule, 
    RouterModule.forChild(routes) // Use forChild for feature modules
  ],
  exports: [
    QuestionsComponent 
  ]
})
export class QuestionsModule { }
