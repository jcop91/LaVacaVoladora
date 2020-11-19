import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ImgAsset = 'assets/imagen/icon.jpeg';
  isAuthenticated: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
