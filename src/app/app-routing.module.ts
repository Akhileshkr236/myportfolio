import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import { EducationComponent } from "./education/education.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { SkillsComponent} from "./skills/skills.component";
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'education', component: EducationComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ ProfileComponent, PortfolioComponent, EducationComponent, WorkExperienceComponent, SkillsComponent ];
