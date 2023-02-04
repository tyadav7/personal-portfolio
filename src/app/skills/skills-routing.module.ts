import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { CloudComponent } from './cloud/cloud.component';
import { DatabaseComponent } from './database/database.component';
import { DeComponent } from './de/de.component';
import { FrontendComponent } from './frontend/frontend.component';
import { SkillsComponent } from './skills.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {
    path: 'skills',
    component: SkillsComponent,
    children: [
      {
        path: 'frontend',
        component: FrontendComponent,
      },
      {
        path: 'backend',
        component: BackendComponent,
      },
      {
        path: 'database',
        component: DatabaseComponent,
      },
      {
        path: 'de',
        component: DeComponent,
      },
      {
        path: 'cloud',
        component: CloudComponent,
      },
      {
        path: 'tools',
        component: ToolsComponent,
      },
      {
        path: '',
        redirectTo: 'frontend',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
