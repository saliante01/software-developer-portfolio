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
    { id: 'about', title: 'Sobre mí' },
    { id: 'experience', title: 'Trayectoria' },
    { id: 'projects', title: 'Proyectos' },
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
}