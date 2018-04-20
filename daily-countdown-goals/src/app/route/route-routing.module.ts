import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { StartComponent } from '../components/start/start.component';
import { SetupComponent } from '../components/setup/setup.component';
import { ResumeComponent } from '../components/resume/resume.component';
import { LoggedOutComponent } from '../components/logged-out/logged-out.component';
import { LoggedInComponent } from '../components/logged-in/logged-in.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
      path: '', 
      component: LoggedOutComponent,
      children: [
        {
          path: '',
          redirectTo: 'start',
          pathMatch: 'full',
        },
        {
          path: 'start',
          component: StartComponent
        },
        {
          path: 'setup',
          component: SetupComponent
        },
        {
          path: 'resume',
          component: ResumeComponent
        }
      ]
  },
  {
    path: 'home',
    component: LoggedInComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        outlet: "header"
      },
      {
        path: "",
        component: HomeComponent,
        outlet: "body"
      },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
