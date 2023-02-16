import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BannerComponent } from './banner/banner.component';
import { ChevronComponent } from './chevron/chevron.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { IconbarComponent } from './iconbar/iconbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsModule } from './skills/skills.module';
import { TechnologyComponent } from './technology/technology.component';
import { TimelineSubComponent } from './timeline-sub/timeline-sub.component';
import { TimelineComponent } from './timeline/timeline.component';

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
    ChevronComponent,
    TimelineComponent,
    TimelineSubComponent
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useValue: () => new Promise(resolve =>
        setTimeout(resolve, 3000)
      ),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
