import { Component, OnInit, Input } from '@angular/core';
import { PlanetService } from '../planet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planet-add',
  templateUrl: './planet-add.component.html',
  styleUrls: ['./planet-add.component.css']
})
export class PlanetAddComponent implements OnInit {

  @Input() planetData = { planetNode:'', planetName:''};

    constructor(public rest:PlanetService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
    }

    addPlanet() {
      this.rest.addPlanet(this.planetData).subscribe((result) => {
        alert('Planet added successfully!')
        this.router.navigate(['/planets/']);
      }, (err) => {
        console.log(err);
      });
    }

}
