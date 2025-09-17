import { Routes } from '@angular/router';
import { Etudiants } from './view/etudiants/etudiants';
import { Navbar } from './view/navbar/navbar';
import { Footer } from './view/footer/footer';
import { About } from './about/about';
import { Student } from './components/student/student';
import { DetailsStudent } from './view/details-student/details-student';

export const routes: Routes = [
    {
        path: 'etudiants',
        component: Etudiants,
    },
    {
        path: 'details-student/:matricule',
        component: DetailsStudent
    },
    {
        path: 'details-student/:matricule/:classe',
        component: DetailsStudent
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
    },
    {
        path: 'student',
        component: Student
    }
];
