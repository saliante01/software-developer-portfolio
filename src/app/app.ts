import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from "./about/about";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { Workexperience } from "./workexperience/workexperience";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Experience, Projects, Contact, Workexperience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
