import { Component, OnInit, Input } from '@angular/core';
import { RouteService } from '../route.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-add',
  templateUrl: './route-add.component.html',
  styleUrls: ['./route-add.component.css']
})
export class RouteAddComponent implements OnInit {

  @Input() routeData = { routeId:0 , origin:'', destination:'', distance:0.0};

     constructor(public rest:RouteService, private route: ActivatedRoute, private router: Router) { }

     ngOnInit() {
     }

     addRoute() {
       this.rest.addRoute(this.routeData).subscribe((result) => {
         this.router.navigate(['/routes/']);
       }, (err) => {
         console.log(err);
       });
     }


}
