import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showBreadcrumbs: boolean = false;
  crumbs: string[];

  constructor(private router: Router) {
    router.events.subscribe((url:any) => {
      console.log(url)
      if (url.url)
      {
        this.showBreadcrumbs = url.url === "/start" || url.url === "/" ? false : true;
        this.crumbs = url.url.slice(1).split("/")
      }
    });

  }
}
