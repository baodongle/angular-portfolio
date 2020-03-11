import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from 'src/app/admin/admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectCreateComponent, ProjectUpdateComponent, ProjectComponent, LoginComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
