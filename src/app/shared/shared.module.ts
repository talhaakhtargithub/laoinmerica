import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MagnifiersDirective } from 'src/app/product1/magnifier.directive'; // Adjust the path as needed

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MagnifiersDirective  // Declare the directive here
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MagnifiersDirective  // Export it so other modules can use it
  ]
})
export class SharedModule { }
