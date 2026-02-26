import { Component, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  router = inject(ActivatedRoute);
  isHome = toSignal(
    this.router.url.pipe(
      map((url) => {
        console.log(url);
        return url[0].path === '/';
      }),
    ),
  );

  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  currentYear = new Date().getFullYear();
}
