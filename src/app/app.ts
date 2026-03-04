import { Component } from '@angular/core';
import { Navbar } from "./layout/navbar/navbar";
import { Hero } from "./sections/hero/hero";
import { About } from "./sections/about/about";
import { Stack } from "./sections/stack/stack";
import { Services } from "./sections/services/services";
import { Projects } from "./sections/projects/projects";
import { Contact } from "./sections/contact/contact";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Stack,
    Services,
    Projects,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }