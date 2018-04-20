import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  user: User = new User(null, null, null)

  constructor(private authService: AuthService, private router: Router) {
    if (!authService.isLoggedIn()) {
      router.navigate(['/', 'start'])
    }
    console.log("subscribe")
    authService.userSubject.subscribe(user => { 
      console.log("user is", user)
      this.user = user})

    //authService.setUser(new User("test", "test", 10))
  }

  ngOnInit() {
  }

}
