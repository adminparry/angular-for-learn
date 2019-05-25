import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import { SharedModule } from '../../../shared';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule
  ]
})
export class ButtonModule { }
