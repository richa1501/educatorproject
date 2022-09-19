import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostDataComponent } from './components/post/post-data/post-data.component';
import { ProfileDataComponent } from './components/profile/profile-data/profile-data.component';

const routes: Routes = [{
  path:"dashbord",
  component:DashboardComponent
},
{
  path:"profile",
  component:ProfileDataComponent
},
{
  path:"post",
  component:PostDataComponent
},
{
  path:"post/edit/:id",
  component:PostDataComponent
},
{
  path:"**",
  component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
