import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './route/list.component';
import { AddComponent } from './route/add.component';
import { MainComponent } from './route/main.component';
import { HomeComponent } from './route/home.component';
import { DetailsComponent } from './route/details.component';
import { DeleteComponent } from './route/delete.component';
import { LogRouteGuard } from './route/log.guard';



const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component : AddComponent , canActivate : [LogRouteGuard] },
  { path: 'details/:code', component : DetailsComponent},
  { path: 'delete/:code', component : DeleteComponent},
  { path: '', component : HomeComponent},
  { path: '**', component : HomeComponent}
  ];


@NgModule({
  declarations: [
        ListComponent,AddComponent, MainComponent,HomeComponent,DetailsComponent,DeleteComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ LogRouteGuard ],
  bootstrap: [ MainComponent ]
})
export class RouteDemoModule { }
