import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ScanListComponent } from './scan-list/scan-list.component';

export const routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'files', component: ScanListComponent },   // temporário
  { path: 'cloud', component: LoginComponent },
  { path: 'profile', component: LoginComponent },
];


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(CommonModule),
  ],
};
