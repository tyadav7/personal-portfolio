import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/material.module';
import { BackendComponent } from './backend/backend.component';
import { CloudComponent } from './cloud/cloud.component';
import { DatabaseComponent } from './database/database.component';
import { DeComponent } from './de/de.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    FrontendComponent,
    ProgressBarComponent,
    BackendComponent,
    DatabaseComponent,
    DeComponent,
    CloudComponent,
    ToolsComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule
  ]
})
export class SkillsModule { }
