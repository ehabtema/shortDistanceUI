import { Component, OnInit, Input } from '@angular/core';
import { RouteService } from '../route.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  planetRoute:any;

   constructor(public rest:RouteService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {
     this.rest.getRoute(this.route.snapshot.params['id']).subscribe((data: {}) => {
       console.log(data);
       this.planetRoute = data;
     });
   }

}
