import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product2Component } from './product2.component'


const routes: Routes = [
  { path: '', component: Product2Component } // Default route for home
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
