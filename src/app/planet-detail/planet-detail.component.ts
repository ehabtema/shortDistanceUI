import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet/planet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  planet:any;

  constructor(public rest:PlanetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.rest.getPlanet(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.planet = data;
    });
  }
}
