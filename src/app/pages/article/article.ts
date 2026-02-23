import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { text } from '../../components/texts';
import { Url } from '../../interfaces/routes.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-article',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  backToNews = '..';
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  articleName: string = this.activeRoute.snapshot.params['articleId'];
  cards = text.news.cards;
  article = this.cards.find(({ link }) => link === this.articleName);

  returnToNews = () => {
    this.router.navigate([`../../${Url.news}`]);
  };

  ngAfterViewInit() {
    if (!this.article) {
      console.log('first');
      this.returnToNews();
    }
  }

  photo: string = this.article!.photo;
  title: string = this.article!.title;
  htmlFullText: any[] = this.article!.fullText;
  autor: string = this.article!.autor;
  source: string = this.article!.source;
}
