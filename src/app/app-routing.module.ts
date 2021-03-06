import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet/planet.component';
import { PlanetAddComponent } from './planet/planet-add/planet-add.component';
import { RouteComponent } from './route/route.component';
import { RouteAddComponent } from './route/route-add/route-add.component';
import { FindDistanceComponent } from './find-distance/find-distance.component';

const routes: Routes = [
  {
    path: 'distance',
    component: FindDistanceComponent,
    data: { title: 'Shortest Route' }
  },
  {
    path: 'planets',
    component: PlanetComponent,
    data: { title: 'Planet List' }
  },
  {
    path: 'planet-add',
    component: PlanetAddComponent,
    data: { title: 'Planet Add' }
  },
  {
    path: 'routes',
    component: RouteComponent,
    data: { title: 'Route List' }
  },
  {
    path: 'route-add',
    component: RouteAddComponent,
    data: { title: 'Route Add' }
  },
  { path: '',
    redirectTo: '/planets',
    pathMatch: 'full'
  }
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes),
            CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
