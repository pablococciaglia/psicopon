import { Component } from '@angular/core';
import { VioletStripe } from '../../components/violet stripe/violet stripe';
import { PhotoStripe } from '../../components/photo stripe/photo stripe';

@Component({
  selector: 'app-home',
  imports: [VioletStripe, PhotoStripe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
