import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { SharedModule } from '../shared/shared.module'; // Import SharedModule
import { HomeRoutingModule } from './home-routing.module'; // Import HomeRoutingModule

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    SectionComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
  ],
  imports: [
    CommonModule,
    SharedModule, // Shared module added
    HomeRoutingModule // Ensure HomeRoutingModule is included
  ],
  exports: [
    HomeComponent // Export HomeComponent if needed
  ]
})
export class HomeModule { }
