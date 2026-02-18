import { Component } from '@angular/core';
import { routesAndTitles } from '../../interfaces/routes.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  arrayOfTitles = routesAndTitles;
}
