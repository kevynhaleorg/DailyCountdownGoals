import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';
import { StartComponent } from './start/start.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';
import { ResumeComponent } from './resume/resume.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CapitalizefirstPipe } from './capitalizefirst.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SetupComponent,
    ResumeComponent,
    BreadcrumbComponent,
    CapitalizefirstPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
