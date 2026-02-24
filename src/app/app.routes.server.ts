import { RenderMode, ServerRoute } from '@angular/ssr';
import { Url } from './interfaces/routes.interface';
import { text } from './components/texts';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: `${Url.news}/:articleId`,
    renderMode: RenderMode.Prerender,

    async getPrerenderParams() {
      return text.news.cards.map(({ link }) => ({ articleId: link }));
    },
  },
];
