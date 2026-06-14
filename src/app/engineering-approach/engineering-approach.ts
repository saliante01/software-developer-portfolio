import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ApproachCard {
  title: string;
  subtitle: string;
  description: string;
  iconSvg: SafeHtml;
}

@Component({
  selector: 'app-engineering-approach',
  imports: [CommonModule],
  templateUrl: './engineering-approach.html',
  styleUrl: './engineering-approach.css',
})
export class EngineeringApproach implements AfterViewInit {

  @ViewChild('sectionRef') sectionRef!: ElementRef;

  headerVisible = false;
  cardsVisible = false;

  approachCards: ApproachCard[] = [];

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {
    this.approachCards = this.createApproachCards();
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.headerVisible = true;
              this.cdr.detectChanges();
            }, 0);
            setTimeout(() => {
              this.cardsVisible = true;
              this.cdr.detectChanges();
            }, 400);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(this.sectionRef.nativeElement);
  }

  formatDescription(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  private trustIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private createApproachCards(): ApproachCard[] {
    return [
    {
      title: 'Arquitectura & Diseño',
      subtitle: 'Arquitectura Limpia & DDD',
      description: 'Mi código se guía por principios de diseño robustos. Implemento **Arquitectura Hexagonal** para mantener el dominio de negocio aislado de la infraestructura, y aplico conceptos de **Domain-Driven Design (DDD)** para estructurar contextos delimitados (<em>Bounded Contexts</em>) claros, asegurando que los sistemas sean escalables, testeables y fáciles de mantener a largo plazo.',
      iconSvg: this.trustIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0M19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73M19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z"/>
      </svg>`)
    },
    {
      title: 'Ecosistema de Datos',
      subtitle: 'Diseño de Datos Modular',
      description: 'Diseño bases de datos relacionales pensando en la modularidad. Utilizo estrategias de aislamiento mediante **múltiples esquemas independientes en PostgreSQL** para evitar el acoplamiento de negocio, gestionando la evolución del modelo de datos de forma segura y profesional a través de migraciones versionadas con **Flyway**.',
      iconSvg: this.trustIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"/>
      </svg>`)
    },
    {
      title: 'Simulación Avanzada',
      subtitle: 'Integración en Tiempo Real',
      description: 'Capacidad para conectar el mundo del software empresarial con entornos gráficos interactivos. Desarrollo servicios en **Spring Boot** encargados de consumir, normalizar y exponer flujos de datos en tiempo casi real, canalizándolos de forma eficiente hacia motores como **Unity** para simulaciones físicas complejas.',
      iconSvg: this.trustIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M22 12C22 6.46 17.54 2 12 2C10.83 2 9.7 2.19 8.62 2.56L9.32 4.5C10.17 4.16 11.06 3.97 12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 11.06 4.16 10.12 4.5 9.28L2.56 8.62C2.19 9.7 2 10.83 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12M5.47 3.97C6.32 3.97 7 4.68 7 5.47C7 6.32 6.32 7 5.47 7C4.68 7 3.97 6.32 3.97 5.47C3.97 4.68 4.68 3.97 5.47 3.97M18 12C18 8.67 15.33 6 12 6C8.67 6 6 8.67 6 12C6 15.33 8.67 18 12 18C15.33 18 18 15.33 18 12M15 12L10 15V9"/>
      </svg>`)
    },
    {
      title: 'Automatización con IA',
      subtitle: 'Ingeniería de Contexto & Agentes',
      description: 'Optimizo los flujos de desarrollo utilizando Inteligencia Artificial como un colaborador estratégico. Diseño e implemento entornos de ejecución automatizados basados en **agentes efímeros** e **inyección de contexto modular (Skills)**, aplicando flujos de revisión humana (<em>Human-in-the-Loop</em>) para garantizar estándares de **Clean Code**.',
      iconSvg: this.trustIcon(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35"/>
        <path d="M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946"/>
        <path d="M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348"/>
        <path d="M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45"/>
        <path d="M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946"/>
        <path d="M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42"/>
      </svg>`)
    }
  ];
  }
}
