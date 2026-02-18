import { Component, input } from '@angular/core';

@Component({
  selector: 'app-photo-stripe',
  imports: [],
  templateUrl: './photo stripe.html',
  styleUrl: './photo stripe.css',
})
export class PhotoStripe {
  text = input<string>();
  photo = input.required<string>();
  height = input<string>();
}
