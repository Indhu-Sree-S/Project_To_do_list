/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { get1, get01, get02 } from '../services/dataformat';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data = { id_project: 0 ,projectName: '', projectStartDate: '', projectEndDate: '', projectNotes: '', projectTasks: 0, projectStatus: 0};
  taskdata = { id_task: 0, taskName: '', taskStartDate: '', taskEndDate: '', taskNotes: '', taskComplexity: 1, taskStatus: 0};
  public flag = 0;
  baseURL = 'https://cloudide.appson.in/workspace/vreactor/public/todolist/project';
  baseURI = 'https://cloudide.appson.in/workspace/vreactor/public/todolist/insertProject';
  TbaseURI = 'https://cloudide.appson.in/workspace/vreactor/public/todolist/insertTask';
  TbaseURL = 'https://cloudide.appson.in/workspace/vreactor/public/todolist/task';
  public tflag = 0;
  message: any;
  list: get1;
  list1: get01;
  projects: any;
  tasks: any;
  Project_Id: any;
  Task_Id: any;
  date = 'YYYY-MM-dd';

  constructor(
    private http: HttpClient,
    public datepipe: DatePipe,
    private router: Router
  ) { }

  getprojectdata(){
    this.flag = 1;
    this.http.get(this.baseURL)
    .subscribe(data1 => {
     console.log(data1);
    this.message = data1;
    this.list = this.message;
    this.projects = this.list.projectDetails;
  });
    }

  projectdetailget(pdata){
    this.data = pdata;
    this.flag = 1;
    this.sending_projectdata();
  }

  taskdetailget(tdata){
    this.taskdata = tdata;
    this.tflag = 1;
    this.data.projectTasks =+ 1;
  }

  viewprojecttask(project){
    this.router.navigate(['/displaytask']);
    console.log('Project id:',project);
    this.data = project;
    const file=JSON.stringify(
      {
        project_id: this.data.id_project
      });
    this.http.post(this.TbaseURL,file)
    .subscribe(data1 => {
     console.log(data1);
     this.message = data1;
     this.list1 = this.message;
     this.tflag = 1;
     this.data.projectTasks = this.list1.taskDetails.length;
     this.tasks = this.list1.taskDetails;
     //this.message = this.tasks;
     console.log(this.tasks);
    });
  }


  sending_projectdata(){
    const file=JSON.stringify(
      {
        projectName: this.data.projectName,
        projectStartDate: this.datepipe.transform(this.data.projectStartDate,this.date),
        projectEndDate: this.datepipe.transform(this.data.projectEndDate,this.date),
        projectNotes: this.data.projectNotes,
        projectTasks: this.data.projectTasks,
        projectStatus: this.data.projectStatus,
     }
    );
    console.log(file);
    this.http.post(this.baseURI,file)
    .subscribe(data1 => {
     console.log(data1);
     this.message = data1;
     this.list = this.message;
     this.projects = this.list.projectDetails;
     console.log('1');
     //this.Project_Id = this.message;
     //this.data.pid = this.Project_Id;
    },
    err => {
    console.log('ERROR!: ', err);
    });
  }


  sending_taskdata(){
    const file=JSON.stringify(
      {
        project_id: this.data.id_project,
        taskName: this.taskdata.taskName,
        taskStartDate: this.datepipe.transform(this.taskdata.taskStartDate,this.date),
        taskEndDate: this.datepipe.transform(this.taskdata.taskEndDate,this.date),
        taskComplexity:this.taskdata.taskComplexity,
        taskNotes: this.taskdata.taskNotes,
        taskStatus: this.taskdata.taskStatus
     }
    );
    console.log(file);
    this.http.post(this.TbaseURI,file)
    .subscribe(data1 => {
     console.log(data1);
     this.message = data1;
     this.tflag = 1;
     this.list1 = this.message;
     this.data.projectTasks = this.list1.taskDetails.length;
     this.tasks = this.list1.taskDetails;
     console.log(this.tasks);
    },
    err => {
    console.log('ERROR!: ', err);
    });
  }

}
