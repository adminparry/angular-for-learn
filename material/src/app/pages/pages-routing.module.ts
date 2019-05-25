import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
	{
		path:'button',
		component:ButtonComponent
	},
	{
		path:'slidenav',
		component:SlidenavComponent
	},
	{
		path:'toolbar',
		component:ToolbarComponent
	},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
