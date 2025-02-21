import { Routes } from '@angular/router';

import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

export const routes: Routes = [
    {
        path : '',
        component : ProfilePageComponent
    },
    {
        path : 'portfolio',
        component : PortfolioPageComponent
    },
    {
        path : 'services',
        component : ServicesPageComponent
    }
];