import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutinfoComponent } from './components/aboutinfo/aboutinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactComponent,
    ServicesComponent,
    HeroComponent,
    AboutinfoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
