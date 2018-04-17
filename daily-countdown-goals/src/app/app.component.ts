import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showBreadcrumbs: boolean = false;
  crumbs: string[];

  constructor(private router: Router) {
    router.events.subscribe((url:any) => {
      if (url.url)
      {
        this.showBreadcrumbs = url.url === "/start" || url.url === "/" ? false : true;
        this.crumbs = url.url.slice(1).split("/")
      }
    });

  }

  ngOnInit() {
  }
}
