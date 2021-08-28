import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskdetailsPageRoutingModule } from './taskdetails-routing.module';

import { TaskdetailsPage } from './taskdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskdetailsPageRoutingModule
  ],
  declarations: [TaskdetailsPage]
})
export class TaskdetailsPageModule {}
