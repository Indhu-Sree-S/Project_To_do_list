import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data = { pname: '', startdate: '', enddate: '', notes: '', tasks: 0, status: 0};
  taskdata = { tname: '', tstartdate: '', tenddate: '', tnotes: '', tcomplexity: 1, tstatus: 0};
  public flag = 0;
  public tflag = 0;

  constructor() { }
  projectdetailget(pdata){
    this.data = pdata;
    this.flag = 1;
  }

  taskdetailget(tdata){
    this.taskdata = tdata;
    this.tflag = 1;
    this.data.tasks =+ 1;
  }

}
