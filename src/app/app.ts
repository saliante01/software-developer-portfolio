import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from "./about/about";
import { Experience } from "./experience/experience";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { Workexperience } from "./workexperience/workexperience";
import { EngineeringApproach } from "./engineering-approach/engineering-approach";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Experience, Projects, Contact, Workexperience, EngineeringApproach],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
