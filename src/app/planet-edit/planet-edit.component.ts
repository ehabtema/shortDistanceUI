import { Component, OnInit, Input } from '@angular/core';
import { PlanetService } from '../planet/planet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planet-edit',
  templateUrl: './planet-edit.component.html',
  styleUrls: ['./planet-edit.component.css']
})
export class PlanetEditComponent implements OnInit {

 @Input() planetData:any = { planetNode: '', planetName: ''};

   constructor(public rest:PlanetService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {
     this.rest.getPlanet(this.route.snapshot.params['id']).subscribe((data: {}) => {
       console.log(data);
       this.planetData = data;
     });
   }

   updatePlanet() {
     this.rest.updatePlanet(this.route.snapshot.params['id'], this.planetData).subscribe((result) => {
       this.router.navigate(['/planet-detail/'+result.id]);
     }, (err) => {
       console.log(err);
     });
   }

}
