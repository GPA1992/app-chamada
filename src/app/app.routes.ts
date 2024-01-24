import { Routes, provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { CallFormComponent } from './core/pages/call-form/call-form.component';
import { CallComponent } from './core/pages/call/call.component';


export const routes: Routes = [
  { path: '', component: CallFormComponent },
  { path: 'call-list', component: CallComponent },
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
  };