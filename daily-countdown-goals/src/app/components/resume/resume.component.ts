import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service'
import { Observable } from 'rxjs/Observable';

import { Error } from './../error/error-manager'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {


  constructor(private authService: AuthService) {
  }

  ngOnInit() {

  }

  submit() {
    console.log("submit")
    this.authService.authenticate(null, null)
  }

}
