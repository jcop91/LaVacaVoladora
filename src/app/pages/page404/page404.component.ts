import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  ImgAsset = 'assets/imagen/404-Page.gif';

  constructor() { }

  ngOnInit(): void {
  }

}
