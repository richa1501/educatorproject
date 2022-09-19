import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileDataComponent } from './components/profile/profile-data/profile-data.component';
import { PostDataComponent } from './components/post/post-data/post-data.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileDataComponent,
    PostDataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
