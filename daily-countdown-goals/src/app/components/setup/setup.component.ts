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

  formGroup: FormGroup;
  form: SetupFormValidation;


  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = new SetupFormValidation(authService)
    this.formGroup = fb.group({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      days: new FormControl()
    }, {
      validator: (ac) => this.form.validate(ac)
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.form.submitValidate(this.formGroup)
    this.formGroup.get("email")
    if (!this.form.isAnyError()) {
      this.authService.create(
        this.formGroup.get(this.form.EMAIL).value,
        this.formGroup.get(this.form.PASSWORD).value,
        this.formGroup.get(this.form.DAYS).value)
    } 
  }

}
