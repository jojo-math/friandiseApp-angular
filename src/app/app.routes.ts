import { Routes } from '@angular/router';
import { Etudiants } from './view/etudiants/etudiants';
import { Navbar } from './view/navbar/navbar';
import { Footer } from './view/footer/footer';
import { About } from './about/about';

export const routes: Routes = [
    {
        path: 'etudiants',
        component: Etudiants
    },
    {
        path: 'navbar',
        component: Navbar
    },
    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'about',
        component: About
    }
];
