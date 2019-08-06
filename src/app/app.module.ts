import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ConteinerComponent } from './conteiner/conteiner.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BenefitsComponent,
    ConteinerComponent,
    DefinitionsComponent,
    AboutComponent,
    ReviewComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
