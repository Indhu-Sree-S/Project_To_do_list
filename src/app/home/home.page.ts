import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data = { pname: '', startdate: '', enddate: '', notes: '', tasks: 0, status: 0};
  date = 'DD-MM-YYYY';


  constructor(
    public service: ServiceService,
    private router: Router
  ) {}

  newproject(){
    this.router.navigate(['/details']);
  }
  viewprojecttask(){
    this.router.navigate(['/displaytask']);
  }



}
