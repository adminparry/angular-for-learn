import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule, } from '@angular/material';

@NgModule({
	imports:[
		CommonModule,
		MatButtonModule,
	    MatToolbarModule,
	    MatSelectModule,
	    MatTabsModule,
	    MatInputModule,
	    MatProgressSpinnerModule,
	    MatChipsModule,
	    MatCardModule,
	    MatSidenavModule,
	    MatCheckboxModule,
	    MatListModule,
	    MatMenuModule,
	    MatIconModule,
	    MatTooltipModule,
	    MatSnackBarModule,
	    MatSlideToggleModule,
	    MatDividerModule,
	],
	exports:[
		MatButtonModule,
	    MatToolbarModule,
	    MatSelectModule,
	    MatTabsModule,
	    MatInputModule,
	    MatProgressSpinnerModule,
	    MatChipsModule,
	    MatCardModule,
	    MatSidenavModule,
	    MatCheckboxModule,
	    MatListModule,
	    MatMenuModule,
	    MatIconModule,
	    MatTooltipModule,
	    MatSnackBarModule,
	    MatSlideToggleModule,
	    MatDividerModule,
	]
})

export class SharedModule {}

