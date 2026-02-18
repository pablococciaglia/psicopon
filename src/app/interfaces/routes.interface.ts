export enum Url {
  home = '',
  whoWeAre = 'quienes-somos',
  onlineTherapy = 'terapia-online',
  attention = 'atencion',
  news = 'novedades',
  FAQ = 'preguntas',
  articles = 'articulos',
  articleName = '/:articleName',
}

export const routesAndTitles = [
  {
    link: Url.home,
    title: 'Inicio',
  },
  {
    link: Url.whoWeAre,
    title: 'Quiénes somos',
  },
  {
    link: Url.onlineTherapy,
    title: 'Terapia online',
  },
  {
    link: Url.attention,
    title: 'Atención',
  },
  {
    link: Url.news,
    title: 'Novedades',
  },
  {
    link: Url.FAQ,
    title: 'Preguntas',
  },
];
