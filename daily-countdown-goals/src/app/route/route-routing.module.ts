import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { StartComponent } from '../components/start/start.component';
import { SetupComponent } from '../components/setup/setup.component';
import { ResumeComponent } from '../components/resume/resume.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'start',
      pathMatch: 'full'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
