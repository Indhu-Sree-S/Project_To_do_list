//import { content1 } from './PostOffice';
/* eslint-disable @typescript-eslint/naming-convention */
export class get1 {
  project: string;
  projectDetails: get2[];
}

export class get2 {
  id_project: number;
  projectName: string;
  projectStartDate: any;
  projectEndDate: any;
  projectStatus: number;
  projectNotes: string;

}

export class get01 {
  //insertTask: string;
  taskDetails: get02[];
}

export class get02 {
  id_task: number;
  project_id: number;
  taskComplexity: string;
  taskEndDate: any;
  taskName: string;
  taskNotes: string;
  taskStartDate: any;
  taskStatus: number;
}
