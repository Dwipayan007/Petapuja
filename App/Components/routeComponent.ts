import { Component,ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {newArrivalComponent} from './newArrivalComponent';
import {producteasyComponent} from './producteasyComponent';
import {productComponent} from './productComponent';

export const routes: Routes = [
  { path: '', component: newArrivalComponent },
  { path: 'producteasy', component: producteasyComponent },
   { path: 'pickels', component: productComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);