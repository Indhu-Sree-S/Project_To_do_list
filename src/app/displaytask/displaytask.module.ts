import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplaytaskPageRoutingModule } from './displaytask-routing.module';

import { DisplaytaskPage } from './displaytask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaytaskPageRoutingModule
  ],
  declarations: [DisplaytaskPage]
})
export class DisplaytaskPageModule {}
