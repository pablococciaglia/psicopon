import { Component } from '@angular/core';
import { PhotoStripe } from '../../components/photo stripe/photo stripe';
import { VioletStripe } from '../../components/violet stripe/violet stripe';
import { text } from '../../components/texts';

@Component({
  selector: 'app-online-therapy',
  imports: [PhotoStripe, VioletStripe],
  templateUrl: './online therapy.html',
  styleUrl: './online therapy.css',
})
export class OnlineTherapy {
  portada = text.online.portada;
  title = text.online.title;
  text1 = text.online.text1;
}
