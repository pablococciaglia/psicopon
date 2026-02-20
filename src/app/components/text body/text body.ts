import { Component, input } from '@angular/core';
import { text } from '../texts';

@Component({
  selector: 'app-text-body',
  imports: [],
  templateUrl: './text body.html',
  styleUrl: './text body.css',
})
export class TextBody {
  isHome = input<boolean>();
  text1 = text.textBody.text1;
  text2 = text.textBody.text2;
  text3 = text.textBody.text3;
  text4 = text.textBody.text4;
  title = text.textBody.title;
}
