import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplaytaskPage } from './displaytask.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaytaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplaytaskPageRoutingModule {}
