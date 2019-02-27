import { Routes } from '@angular/router'

import { HomeComponent } from 'src/app/home/home.component'
import { RestaurantesComponent } from 'src/app/restaurantes/restaurantes.component'
import { DiversaoComponent } from 'src/app/diversao/diversao.component'


export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent},




]