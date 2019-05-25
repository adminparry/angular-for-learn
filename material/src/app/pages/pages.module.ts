import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../../shared';

import { ButtonComponent } from './button/button.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [SlidenavComponent,ButtonComponent, ToolbarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
