import { Injectable } from '@angular/core';
import { ErrorManager } from '../../components/error/error-manager'

@Injectable()
export class AuthService {

  errorManager: ErrorManager = new ErrorManager();

  constructor() {
    
  }

  authenticate(email: string, password: string)
  {
    this.errorManager.clear()

    this.errorManager.push("Invalid credentials.")

    this.errorManager.push("Invalid credentials Bad.")
  }
}
