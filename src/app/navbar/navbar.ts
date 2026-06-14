import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;
  isMenuOpen = false;
  activeLink = 'hero';
  lang = 'es';

  constructor(private translate: TranslateService) {
    this.translate.lang$.subscribe(l => this.lang = l);
  }

  switchLang() {
    this.translate.switchLang();
  }

  navLinks = [
    { id: 'hero', titleKey: 'nav.inicio' },
    { id: 'experience', titleKey: 'nav.tecnologias' },
    { id: 'projects', titleKey: 'nav.proyectos' },
    { id: 'work', titleKey: 'nav.experiencia' },
    { id: 'engineering-approach', titleKey: 'nav.enfoque' },
    { id: 'contact', titleKey: 'nav.contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // ← Fix bug: cierra el menú móvil si la ventana pasa al breakpoint sm (640px)
  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth >= 640 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
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
