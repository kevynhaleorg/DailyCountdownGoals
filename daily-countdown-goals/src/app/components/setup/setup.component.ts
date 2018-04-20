import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SetupFormValidation } from './../error/setup-form-validation';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  form: SetupFormValidation;

  constructor(private authService: AuthService) {
    this.form = new SetupFormValidation(authService)
  }

  ngOnInit() {
  }

  onSubmit() {
    this.form.submitValidate()
    if (!this.form.isAnyError()) {
      this.authService.create(
        this.form.getValue(this.form.EMAIL),
        this.form.getValue(this.form.PASSWORD),
        this.form.getValue(this.form.DAYS))
    } 
  }

}
