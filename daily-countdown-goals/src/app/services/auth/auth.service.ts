import { Injectable } from '@angular/core';
import { ErrorManager } from '../../components/error/error-manager'
import { USER } from './auth-storage'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthService {

  errorManager: ErrorManager = new ErrorManager();
  users: User[] = [new User("khale@jive.com", "test", 10)]
  user$: Observable<any>;
  private _userObserver: Observer<any>;

  public userSubject: BehaviorSubject<User>;

  
  

	constructor() {
    let user: User;
    if (localStorage.getItem(USER)) {
      user = this.users.filter(user => user.email === localStorage.getItem(USER))[0]
    }
    else {
      const user = new User(null, null, null)
    }
    this.userSubject = new BehaviorSubject(user)
  }
  
  setUser(user:User) {
      this.userSubject.next(user)
  }

  isLoggedIn(): boolean {
    if (!localStorage.getItem(USER)) {
      return false
    }

    return true
  }

  authenticate(email: string, password: string)
  {
    const users: User[] = this.users.filter(user => user.email === email && user.password == password)

    if (users.length == 0) {
      this.errorManager.clear()
      this.errorManager.push("Invalid credentials provided.")
      return false
    }

    localStorage.setItem(USER, users[0].email)
    this.setUser(users[0])

    return true 
  }

  create(email: string, password: string, days: number): User {
    if (this.doesUserExist(email))
    {
      return;
    }
    const user: User = new User(email, password, days)
    this.users.push(user)
    localStorage.setItem(USER, user.email)
    this.setUser(user)
    return user
  }

  doesUserExist(email: string): boolean {
    return this.users.filter(user => user.email === email).length > 0
  }
}

export class User {
  email: string;
  password: string;
  days: number;
  start: Date;

  constructor(email:string, password:string, days:number) {
    this.email = email
    this.password = password
    this.days = days
    this.start = new Date()
  }
}
