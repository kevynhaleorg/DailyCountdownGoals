import { Injectable } from '@angular/core';
import { ErrorManager } from '../../components/error/error-manager'

@Injectable()
export class AuthService {

  errorManager: ErrorManager = new ErrorManager();
  users: User[] = [new User("khale@jive.com", "test", 10)]

  constructor() {
    
  }

  authenticate(email: string, password: string)
  {
    const users: User[] = this.users.filter(user => user.email === email && user.password == password)

    if (users.length == 0) {
      return false
    }

    return users[0]
  }

  create(email: string, password: string, days: number): User {
    if (this.doesUserExist(email))
    {
      return;
    }
    const user: User = new User(email, password, days)
    this.users.push(user)
    console.log(this.users)
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

  constructor(email:string, password:string, days:number) {
    this.email = email
    this.password = password
    this.days = days
  }
}
