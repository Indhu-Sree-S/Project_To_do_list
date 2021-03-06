import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.page.html',
  styleUrls: ['./taskdetails.page.scss'],
})
export class TaskdetailsPage implements OnInit {
  mydate = new Date().toISOString();
  taskdata = { taskName: '', taskStartDate: '', taskEndDate: '', taskNotes: '', taskComplexity: 1, taskStatus: 0};
  constructor(
    public service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  taskdetails(submitform: NgForm){
    this.service.taskdetailget(this.taskdata);
    this.service.sending_taskdata();
    this.router.navigate(['/displaytask']);
  }
  cancel(){
    this.router.navigate(['/displaytask']);
  }
}
