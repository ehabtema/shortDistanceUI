import { Component, OnInit } from '@angular/core';
import { RouteService } from './route.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

   planetRoutes:any = [];
   planetRoute:any;

   constructor(public rest:RouteService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.getRoutes();
    }

    getRoutes() {
      this.planetRoutes = [];
      this.rest.getRoutes().subscribe((data: {}) => {
        console.log(data);
        this.planetRoutes = data;
      });
    }

    getRoute(id) {
      this.planetRoute = '';
      this.rest.getRoute(id).subscribe((data: {}) => {
        console.log(data);
        this.planetRoute = data;
      });
    }

    add() {
      this.router.navigate(['/route-add']);
    }

    delete(id) {
      this.rest.deleteRoute(id)
        .subscribe(res => {
            this.getRoutes();
          }, (err) => {
            console.log(err);
          }
        );
    }
}
