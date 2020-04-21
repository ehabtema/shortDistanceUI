import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planets:any = [];
  planet:any;

  constructor(public rest:PlanetService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {
     this.getPlanets();
   }

   getPlanets() {
     this.planets = [];
     this.rest.getPlanets().subscribe((data: {}) => {
       console.log(data);
       this.planets = data;
     });
   }

   getPlanet(id) {
   this.planet = '';
        this.rest.getPlanet(id).subscribe((data: {}) => {
          console.log(data);
          this.planet = data;
        });
   }

   add() {
     this.router.navigate(['/planet-add']);
   }

   delete(id) {
     this.rest.deletePlanet(id)
       .subscribe(res => {
           this.getPlanets();
         }, (err) => {
           console.log(err);
         }
       );
   }
 }
