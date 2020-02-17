import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../managestaff/user-profile/user-profile.component';
import { ManageWardComponent } from '../../manage-ward/manage-ward.component';
import { ManageCategoriesComponent } from '../../manage-categories/manage-categories.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../trees/trees.component';
import { ManagestaffComponent } from 'app/managestaff/managestaff.component';
import { EditcategoryComponent } from 'app/editcategory/editcategory.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent 
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'managestaff/user-profile',   component: UserProfileComponent },
    { path: 'managestaff',   component: ManagestaffComponent },
    { path: 'manage-ward',     component: ManageWardComponent },
    { path: 'manage-categories',     component: ManageCategoriesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {path : 'editcategory' , component : EditcategoryComponent}
];
