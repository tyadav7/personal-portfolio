import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { IconbarComponent } from './iconbar/iconbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsModule } from './skills/skills.module';
import { TechnologyComponent } from './technology/technology.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ChevronComponent } from './chevron/chevron.component';
import { SkillsNewComponent } from './skills-new/skills-new.component';
import { ProgressBarComponent } from './skills/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BannerComponent,
    IconbarComponent,
    AboutComponent,
    TechnologyComponent,
    ExperienceComponent,
    EducationComponent,
    NavbarComponent,
    AvatarComponent,
    ChevronComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
