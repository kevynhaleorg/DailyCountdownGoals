import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';
import { StartComponent } from './components/start/start.component'
import { RouteRoutingModule } from './route/route-routing.module';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './components/setup/setup.component';
import { ResumeComponent } from './components/resume/resume.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CapitalizefirstPipe } from './capitalizefirst.pipe';
import { AuthService } from './services/auth/auth.service';
import { ErrorComponent } from './components/error/error.component';
import { ErrorHighlightDirective } from './components/error/error-highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SetupComponent,
    ResumeComponent,
    BreadcrumbComponent,
    CapitalizefirstPipe,
    ErrorComponent,
    ErrorHighlightDirective,
    HeaderComponent,
    LoggedInComponent,
    LoggedOutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
