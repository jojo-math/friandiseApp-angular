import { Routes } from '@angular/router';
import { Navbar } from './view/navbar/navbar';
import { Footer } from './view/footer/footer';
import { About } from './view/about/about';
import { ArticleList } from './view/article-list/article-list';

export const routes: Routes = [
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
        path: 'articleList',
        component:ArticleList
    }
];
