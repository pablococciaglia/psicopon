import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Url } from './interfaces/routes.interface';
import { WhoWeAre } from './pages/who we are/who we are';
import { OnlineTherapy } from './pages/online therapy/online therapy';
import { Attention } from './pages/attention/attention';
import { News } from './pages/news/news';
import { Faq } from './pages/faq/faq';
import { Article } from './pages/article/article';

export const routes: Routes = [
  {
    path: Url.home,
    component: Home,
  },
  {
    path: Url.whoWeAre,
    component: WhoWeAre,
  },
  {
    path: Url.onlineTherapy,
    component: OnlineTherapy,
  },
  {
    path: Url.attention,
    component: Attention,
  },
  {
    path: Url.news,
    component: News,
  },
  {
    path: `${Url.news}/:articleId`,
    component: Article,
  },
  {
    path: Url.FAQ,
    component: Faq,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
