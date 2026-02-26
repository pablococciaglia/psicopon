import { Component, ElementRef, HostListener, signal, viewChild } from '@angular/core';
import { text } from '../../components/texts';
import { PhotoStripe } from '../../components/photo stripe/photo stripe';
import { VioletStripe } from '../../components/violet stripe/violet stripe';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-who-we-are',
  imports: [PhotoStripe, VioletStripe, FaIconComponent],
  templateUrl: './who we are.html',
  styleUrl: './who we are.css',
})
export class WhoWeAre {
  divElement = viewChild<ElementRef>('extraText');
  divHeight = signal<number | undefined>(undefined);

  setHeight() {
    this.divHeight.set(this.divElement()?.nativeElement.offsetHeight);
  }

  @HostListener('window:resize')
  onResize() {
    this.setHeight();
  }

  @HostListener('window:load')
  onLoad() {
    this.setHeight();
  }

  faLinkedin = faLinkedin;
  portada = text.whoWeAre.portada;
  title = text.whoWeAre.title;
  pretext = text.whoWeAre.pretext;
  pretitle = text.whoWeAre.pretitle;
  members = text.whoWeAre.members;
  extras = text.whoWeAre.extras;
  stuff = text.whoWeAre.stuff;
}
