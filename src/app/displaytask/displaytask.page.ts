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
    if (e.currentTarget.checked) {
      this.service.taskdata.tstatus = 1;
      this.service.data.status = this.service.taskdata.tstatus;
    }
  }

  complexity(){
    if (this.service.taskdata.tcomplexity === 1) {
      console.log(this.service.taskdata.tcomplexity);
      return 'Low';
    } else if (this.service.taskdata.tcomplexity === 2) {
      console.log(this.service.taskdata.tcomplexity);
      return 'Medium';
    } else if (this.service.taskdata.tcomplexity === 3){
      console.log(this.service.taskdata.tcomplexity);
      return 'High';
    }
  }


}
