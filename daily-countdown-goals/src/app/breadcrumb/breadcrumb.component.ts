import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  crumbPaths: CrumbPath[] = new Array();
  lastCrumb: CrumbPath;

  @Input("crumbs") 
  set crumbs(crumbs: string[]) {
    this.crumbPaths = new Array();
    crumbs.slice(0, crumbs.length - 1).forEach( crumb => {
      this.crumbPaths.push(
        new CrumbPath(
          crumb,
          "/" + this.crumbPaths.map((crumb) => crumb.path).join("/") + `/${crumb}` ))
    })

    this.lastCrumb = new CrumbPath(crumbs.slice(-1)[0], null)

  }

}

class CrumbPath {

  constructor(path: string, url: string)
  {
    this.path = path
    this.url = url
  }

  path: string;
  url: string;

}
