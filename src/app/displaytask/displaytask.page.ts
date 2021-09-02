import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-displaytask',
  templateUrl: './displaytask.page.html',
  styleUrls: ['./displaytask.page.scss'],
})
export class DisplaytaskPage implements OnInit{
  date = 'DD-MM-YYYY';

  constructor(
    public service: ServiceService,
    private router: Router
  ) {   }

  ngOnInit() {
  }

  newtask(){
    this.router.navigate(['/taskdetails']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  checkbox(e){
    console.log(e);
    //if (e.currentTarget.checked) {
      //this.service.taskdata.taskStatus = 1;
      //this.service.data.projectStatus = this.service.taskdata.taskStatus;}
  }



}
