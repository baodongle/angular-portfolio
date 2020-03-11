import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/admin/admin.guard';
import { LoginComponent } from 'src/app/admin/login/login.component';
import { ProjectCreateComponent } from 'src/app/admin/project-create/project-create.component';
import { ProjectListComponent } from 'src/app/admin/project-list/project-list.component';
import { ProjectUpdateComponent } from 'src/app/admin/project-update/project-update.component';
import { ProjectComponent } from 'src/app/admin/project/project.component';

const routes: Routes = [
  {
    path: 'admin',
    component: ProjectComponent,
    children: [
      { path: 'list', component: ProjectListComponent, canActivate: [AdminGuard] },
      { path: 'create', component: ProjectCreateComponent, canActivate: [AdminGuard] },
      { path: 'update', component: ProjectUpdateComponent, canActivate: [AdminGuard] },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
