import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  // templateUrl: './page-not-found.component.html',
  template : `
    <h3>Page Not Found</h3>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
