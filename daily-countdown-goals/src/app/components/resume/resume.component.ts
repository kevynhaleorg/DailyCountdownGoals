import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service'
import { Observable } from 'rxjs/Observable';

import { Error } from './../error/error-manager'
import { ResumeFormValidation } from '../error/resume-form-validation';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  form: ResumeFormValidation;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = new ResumeFormValidation();
  }

  submit() {
    this.form.submitValidate()
    if (!this.form.isAnyError()) {
      if (this.authService.authenticate(
        this.form.getValue(this.form.EMAIL),
        this.form.getValue(this.form.PASSWORD))) {

          this.router.navigate(['/', 'home'])
        }
    }
  }

}
