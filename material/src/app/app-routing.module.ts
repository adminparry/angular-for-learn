import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
	{
		path:'button',
		loadChildren:'./pages/button/button.module#ButtonModule'
	},
	{
		path:'component',
		loadChildren:'./pages/pages.module#PagesModule'
	},
	{ path: '**', redirectTo: '/button', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
