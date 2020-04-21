import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import 'hammerjs'

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from "@angular/material/table";
import { NgxSoapModule } from 'ngx-soap';

import { PlanetComponent } from './planet/planet.component';
import { PlanetAddComponent } from './planet-add/planet-add.component';
import { PlanetEditComponent } from './planet-edit/planet-edit.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { RouteComponent } from './route/route.component';
import { RouteAddComponent } from './route/route-add/route-add.component';
import { RouteDetailComponent } from './route/route-detail/route-detail.component';
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
    path: 'planet-detail/:id',
    component: PlanetDetailComponent,
    data: { title: 'Planet Details' }
  },
  {
    path: 'planet-add',
    component: PlanetAddComponent,
    data: { title: 'Planet Add' }
  },
  {
    path: 'planet-edit/:id',
    component: PlanetEditComponent,
    data: { title: 'Planet Edit' }
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
  {
    path: 'route-detail/:id',
    component: RouteDetailComponent,
    data: { title: 'Route Details' }
  },
  { path: '',
    redirectTo: '/planets',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FindDistanceComponent,
    PlanetComponent,
    PlanetAddComponent,
    PlanetEditComponent,
    PlanetDetailComponent,
    RouteComponent,
    RouteAddComponent,
    RouteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSoapModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
