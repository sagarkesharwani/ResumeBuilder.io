import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { DeveloperPageComponent } from './component/developer-page/developer-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { TesterPageComponent } from './component/tester-page/tester-page.component';
import { AnalystPageComponent } from './component/analyst-page/analyst-page.component';
import { Beginner1TemplateComponent } from './component/beginner1-template/beginner1-template.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomepageComponent,
    DeveloperPageComponent,
    FooterComponent,
    TesterPageComponent,
    AnalystPageComponent,
    Beginner1TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
