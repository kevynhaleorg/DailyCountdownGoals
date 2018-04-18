import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Error } from './error-manager'


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() errorChange: Observable<any>;
  errors: Error[];

  constructor() {
    
  }

  ngOnInit() {
    this.errorChange.subscribe(
      errors => {
        this.errors = errors
      }
    )
  }

}
