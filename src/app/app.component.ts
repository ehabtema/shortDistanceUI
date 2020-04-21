import { Component } from '@angular/core';
import { NgxSoapService, ISoapMethod, Client, ISoapMethodResponse } from 'ngx-soap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shortDist';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
      this.navLinks = [
          {
              label: 'Planets',
              link: './planets',
              index: 0
          }, {
              label: 'Routes',
              link: './routes',
              index: 1
          }, {
              label: 'Distance',
              link: './distance',
              index: 2
          },
      ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
