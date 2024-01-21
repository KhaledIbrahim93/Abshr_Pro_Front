import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    
  
    {
      path: 'individuals',
      loadChildren: () => import('./Modules/Individuals/individuals.module')
        .then(mod => mod.IndividualsModule)
    },
  
    { path: '', component: LandingComponent }
  ];