import { ManagestaffComponent } from './../../managestaff/managestaff.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../managestaff/user-profile/user-profile.component';
import { ManageWardComponent } from '../../manage-ward/manage-ward.component';
import { ManageCategoriesComponent } from '../../manage-categories/manage-categories.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../trees/trees.component';



import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ManageWardComponent,
    ManageCategoriesComponent,
    IconsComponent,
    MapsComponent,
    ManagestaffComponent


  ]
})

export class AdminLayoutModule {}
