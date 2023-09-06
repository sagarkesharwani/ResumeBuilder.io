import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { DeveloperPageComponent } from './component/developer-page/developer-page.component';
import { TesterPageComponent } from './component/tester-page/tester-page.component';
import { AnalystPageComponent } from './component/analyst-page/analyst-page.component';
import { Beginner1TemplateComponent } from './component/beginner1-template/beginner1-template.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'devpage',component:DeveloperPageComponent},
  {path:'testerpage',component:TesterPageComponent},
  {path:'analystpage',component:AnalystPageComponent},
  {path:'beg1page',component:Beginner1TemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
