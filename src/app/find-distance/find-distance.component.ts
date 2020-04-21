import { Component, OnInit, Input } from '@angular/core';
import { DistanceService } from './distance.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';

@Component({
  selector: 'app-find-distance',
  templateUrl: './find-distance.component.html',
  styleUrls: ['./find-distance.component.css']
})
export class FindDistanceComponent implements OnInit {

  routes: any[];

  @Input() nodeData = { node:''};

  constructor(public rest:DistanceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { }

  getShortRoute() {
    console.log(this.nodeData.node);
    this.rest.getShortRoute(this.nodeData.node).subscribe((result) => {
     this.routes = result;
      this.router.navigate(['/distance']);
    }, (err) => {
      console.log(err);
    });
  }

}
