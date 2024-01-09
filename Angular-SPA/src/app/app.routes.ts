import { Routes } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AlltimehitsComponent } from './components/alltimehits/alltimehits.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path: ''
    },
    {
        component: PopularComponent,
        path: 'popular'
    },
    {
        component:AlltimehitsComponent,
        path:'alltimehits'
    },
      {
        component:ContactComponent,
        path:'contact'
    },
   
];

