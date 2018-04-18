import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SetupFormValidation } from './../error/setup-form-validation';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  formGroup: FormGroup;
  form: SetupFormValidation;


  constructor(private fb: FormBuilder) {
    this.form = new SetupFormValidation()
    console.log(this.form.isAnyError())
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
    console.log(this.form);
  }

}
