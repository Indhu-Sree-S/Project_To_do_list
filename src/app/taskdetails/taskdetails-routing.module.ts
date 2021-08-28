import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskdetailsPage } from './taskdetails.page';

const routes: Routes = [
  {
    path: '',
    component: TaskdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskdetailsPageRoutingModule {}
