import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { SharedModule } from '../shared/shared.module'; // Import SharedModule
import { RouterModule, Routes } from '@angular/router';
import { Section6Component } from './section6/section6.component';


const routes: Routes = [
  { path: '', component: AboutusComponent }
];

@NgModule({
  declarations: [
    AboutusComponent,
    HeroComponent,
    SectionComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component



 
  ],
  imports: [
    CommonModule,
    SharedModule, // Shared module added
    RouterModule.forChild(routes)
  ],
  exports: [
    AboutusComponent 
  ]
})
export class AboutusModule { }
