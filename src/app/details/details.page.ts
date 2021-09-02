/* eslint-disable @typescript-eslint/naming-convention */
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
  data = { id_project: 0 ,projectName: '', projectStartDate: '', projectEndDate: '', projectNotes: '', projectTasks: 0, projectStatus: 0};

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  details(submitform: NgForm){
    console.log(this.data.projectName);
    console.log(this.data.projectStartDate);
    console.log(this.data.projectEndDate);
    this.service.projectdetailget(this.data);
    this.router.navigate(['/home']);
    }

  cancel(){
    this.router.navigate(['/home']);
  }

}
