import { Component } from '@angular/core';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { StackComponent } from "./sections/stack/stack.component";
import { ServicesComponent } from "./sections/services/services.component";
// import { ProjectsComponent } from "./sections/projects/projects";
// import { ContactComponent } from "./sections/contact/contact";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    StackComponent,
    ServicesComponent,
    // ProjectsComponent,
    // ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }