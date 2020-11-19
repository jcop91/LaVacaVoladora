import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-pages',
  templateUrl: './start-pages.component.html',
  styleUrls: ['./start-pages.component.scss']
})
export class StartPagesComponent implements OnInit {

  Title = 'Bienvenido';
  Src = 'assets/imagen/flipping_burgers.gif';

  constructor() { }

  ngOnInit(): void {
  }

}
