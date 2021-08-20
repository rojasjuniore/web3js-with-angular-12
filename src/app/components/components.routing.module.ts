import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EatsComponent } from './eats/eats.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'eats',
        component: EatsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }