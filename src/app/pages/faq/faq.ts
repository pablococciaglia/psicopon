import { Component } from '@angular/core';
import { PhotoStripe } from '../../components/photo stripe/photo stripe';
import { text } from '../../components/texts';

@Component({
  selector: 'app-faq',
  imports: [PhotoStripe],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faq = text.questions.faq;
  portada = text.questions.portada;
}
