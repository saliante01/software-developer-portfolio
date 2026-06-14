import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslatePipe } from '../pipes/translate.pipe';

interface WorkExp {
  title: string;
  company: string;
  date: string;
  logo: string;
  svgIcon?: string;
  safeSvg?: SafeHtml;
  visible: boolean;
}

@Component({
  selector: 'app-workexperience',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './workexperience.html',
  styleUrl: './workexperience.css',
})
export class Workexperience implements AfterViewInit {

  @ViewChild('timelineSection') timelineSection!: ElementRef;

  headerVisible = false;
  lineVisible = false;

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
    this.experiences.forEach(exp => {
      if (exp.svgIcon) {
        exp.safeSvg = this.sanitizer.bypassSecurityTrustHtml(exp.svgIcon);
      }
    });
  }

  dots = new Array(16);

experiences: WorkExp[] = [
    {
      title: 'Desarrollador Principal & Arquitecto de Software',
      company: 'Iniciativa de Innovación Académica y Tecnológica (Fase I+D)',
      date: '2026 – Presente',
      logo: '',
      svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="4" rx="1"/>
        <rect x="4" y="10" width="16" height="4" rx="1"/>
        <rect x="5" y="17" width="14" height="4" rx="1"/>
      </svg>`,
      visible: false
    },
    {
      title: 'Desarrollador UX/UI Frontend',
      company: 'Departamento de Innovación Académica y Tecnológica — IDEAUFO',
      date: 'Jun 2025 – Oct 2025',
      logo: '/idea_ufro.png',
      svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>`,
      visible: false
    },
    {
      title: 'Desarrollador Backend (Desafío de Innovación)',
      company: 'Cámara Chilena de la Construcción (CChC)',
      date: 'Nov 2025',
      logo: '/cchc.png',
      svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="6" rx="8" ry="3"/>
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3V12"/>
      </svg>`,
      visible: false
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Extreme Adventure Academy',
      date: 'Abr 2025',
      logo: '/extremeadventure.png',
      svgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12,2 22,7 12,12 2,7"/>
        <polygon points="2,7 12,12 22,7 22,12 12,17 2,12"/>
        <polygon points="2,12 12,17 22,12 22,17 12,22 2,17"/>
      </svg>`,
      visible: false
    },
    {
      title: 'Práctica Profesional II (Software Prototyping)',
      company: 'Abstract Digital Works',
      date: 'Feb 2025 – Mar 2025',
      logo: '/abstract_digital.jpeg',
      visible: false
    },
    {
      title: 'Práctica Profesional I (Software Prototyping)',
      company: 'FF Studios',
      date: '2024',
      logo: '/logo-ffstudios.png',
      visible: false
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {

            // 1. Fade in del header
            setTimeout(() => {
              this.headerVisible = true;
              this.cdr.detectChanges();
            }, 0);

            // 2. Aparece la línea vertical
            setTimeout(() => {
              this.lineVisible = true;
              this.cdr.detectChanges();
            }, 400);

            // 3. Tarjetas de una en una desde sus lados
            setTimeout(() => {
              this.showCardsOneByOne(0);
            }, 800);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(this.timelineSection.nativeElement);
  }

  showCardsOneByOne(index: number) {
    if (index >= this.experiences.length) return;

    this.experiences[index].visible = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.showCardsOneByOne(index + 1);
    }, 600);
  }
}
