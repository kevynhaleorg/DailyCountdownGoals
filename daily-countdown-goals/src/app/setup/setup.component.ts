import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validation';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      days: new FormControl()
    }, {
      validator: PasswordValidation.MatchPassword // your validation method
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log("hello")
    console.log(this.form);
  }

}
