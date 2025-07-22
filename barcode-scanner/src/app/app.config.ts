import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { provideRouter } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';

export const routes = [
  { path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient()]
};

