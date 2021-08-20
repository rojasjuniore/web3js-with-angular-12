import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components.routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EatsComponent } from './eats/eats.component';



@NgModule({
  declarations: [HomeComponent, EatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
