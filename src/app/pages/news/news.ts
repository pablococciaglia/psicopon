import { Component } from '@angular/core';
import { text } from '../../components/texts';
import { PhotoStripe } from '../../components/photo stripe/photo stripe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [PhotoStripe, RouterLink],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {
  cards = text.news.cards;
  portada = text.news.portada;
}
