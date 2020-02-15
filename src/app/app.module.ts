import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { FetchStaffService } from './shared/fetch-staff.service';
import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore'
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './managestaff/user-profile/user-profile.component';
import { ManageWardComponent } from './manage-ward/manage-ward.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './trees/trees.component';


import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ManagestaffComponent } from './managestaff/managestaff.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MatIconModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatRippleModule, MatSelect, MatSelectModule } from '@angular/material';
import { DialogOpenComponent } from './dialog-open/dialog-open.component';
import { AddwarmodalComponent } from './addwarmodal/addwarmodal.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditareaComponent } from './editarea/editarea.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireAuthModule,
    MatDialogModule,
    MatSnackBarModule,
    //AddwarmodalComponent,
    NgbModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule
    
    
   
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DialogOpenComponent,
    AddwarmodalComponent,
    EditareaComponent

  ],
  providers: [FetchStaffService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOpenComponent, AddwarmodalComponent , EditareaComponent]
})
export class AppModule { }
