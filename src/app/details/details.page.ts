import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  mydate = new Date().toISOString();
  data = { pname: '', startdate: this.mydate, enddate: '', notes: '', tasks: 0, status: 0};

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  details(submitform: NgForm){
    console.log(this.data.pname);
    console.log(this.data.startdate);
    console.log(this.data.enddate);
    this.service.projectdetailget(this.data);
    this.router.navigate(['/home']);
    }

  cancel(){
    this.router.navigate(['/home']);
  }

}
