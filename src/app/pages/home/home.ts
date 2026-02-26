import { Component } from '@angular/core';
import { VioletStripe } from '../../components/violet stripe/violet stripe';
import { PhotoStripe } from '../../components/photo stripe/photo stripe';
import { TextBody } from '../../components/text body/text body';
import { text } from '../../components/texts';

@Component({
  selector: 'app-home',
  imports: [VioletStripe, PhotoStripe, TextBody],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = text.home.title;
}
