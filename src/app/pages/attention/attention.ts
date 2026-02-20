import { Component } from '@angular/core';
import { VioletStripe } from '../../components/violet stripe/violet stripe';
import { PhotoStripe } from '../../components/photo stripe/photo stripe';
import { text } from '../../components/texts';

@Component({
  selector: 'app-attention',
  imports: [VioletStripe, PhotoStripe],
  templateUrl: './attention.html',
  styleUrl: './attention.css',
})
export class Attention {
  title = text.attention.title;
  portada = text.attention.portada;
  cards = text.attention.cards;
}
