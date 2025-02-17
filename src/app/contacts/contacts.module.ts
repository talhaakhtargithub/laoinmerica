import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { HeroComponent } from './hero/hero.component';
import { SectionComponent } from './section/section.component';

import { SharedModule } from '../shared/shared.module'; // Import SharedModule
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ContactsComponent }
];

@NgModule({
  declarations: [
    ContactsComponent,
    HeroComponent,
    SectionComponent,
 
  ],
  imports: [
    CommonModule,
    SharedModule, // Shared module added
    RouterModule.forChild(routes)
  ],
  exports: [
    ContactsComponent 
  ]
})
export class ContactsModule { }
