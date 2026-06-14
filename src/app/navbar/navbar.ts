import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule], 
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;
  isMenuOpen = false;
  activeLink = 'hero';

  navLinks = [
    { id: 'hero', title: 'Inicio' },
    { id: 'experience', title: 'Tecnologías' },
    { id: 'projects', title: 'Proyectos' },
    { id: 'work', title: 'Experiencia' },
    { id: 'contact', title: 'Contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActive(id: string) {
    this.activeLink = id;
  }

  scrollTo(id: string) {
    this.setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}