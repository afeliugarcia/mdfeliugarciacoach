//Importar módulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar los componentes
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutinfoComponent } from './components/aboutinfo/aboutinfo.component';
import { AppComponent } from './app.component';

//Array de rutas
const appRoutes: Routes = [
	{path:'aboutme', component:AboutmeComponent},
	{path:'contact', component:ContactComponent},
	{path:'services', component:ServicesComponent},
	{path:'aboutinfo', component:AboutinfoComponent},
	{path:'', component:HeroComponent},
	{path:'**', component:HeroComponent},
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);