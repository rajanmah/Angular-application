import { Routes } from '@angular/router';
import { PopularComponent } from './components/popular/popular.component';
import { TrendingComponent } from './components/trending/trending.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

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
        component:TrendingComponent,
        path:'trending'
    },
    {
        component:UpcomingComponent,
        path:'upcoming'
    },
    {
        component:ContactComponent,
        path:'contact'
    },
   
];

