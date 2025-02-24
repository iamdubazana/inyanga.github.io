import { Routes } from '@angular/router';
import { SiteComponent } from './pages/site/site.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ServicesComponent } from './pages/services/services.component';
import { GallaryComponent } from './pages/gallary/gallary.component';

export const routes: Routes = [
    {
        path: '',
        component: SiteComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'shop',
        component : ShopComponent
    },
    {
        path : 'services',
        component : ServicesComponent
    },
    {
        path : 'gallary',
        component : GallaryComponent
    },
    // {
    //     path : 'shop',
    //     component : ShopComponent
    // },
];
