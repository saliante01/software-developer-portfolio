import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ApproachCard {
  title: string;
  subtitle: string;
  description: string;
  iconSvg: string;
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

  constructor(private cdr: ChangeDetectorRef) {}

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

  approachCards: ApproachCard[] = [
    {
      title: 'Arquitectura & Diseño',
      subtitle: 'Arquitectura Limpia & DDD',
      description: 'Mi código se guía por principios de diseño robustos. Implemento **Arquitectura Hexagonal** para mantener el dominio de negocio aislado de la infraestructura, y aplico conceptos de **Domain-Driven Design (DDD)** para estructurar contextos delimitados (<em>Bounded Contexts</em>) claros, asegurando que los sistemas sean escalables, testeables y fáciles de mantener a largo plazo.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="12" r="7"/>
        <circle cx="12" cy="12" r="11"/>
      </svg>`
    },
    {
      title: 'Ecosistema de Datos',
      subtitle: 'Diseño de Datos Modular',
      description: 'Diseño bases de datos relacionales pensando en la modularidad. Utilizo estrategias de aislamiento mediante **múltiples esquemas independientes en PostgreSQL** para evitar el acoplamiento de negocio, gestionando la evolución del modelo de datos de forma segura y profesional a través de migraciones versionadas con **Flyway**.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>`
    },
    {
      title: 'Simulación Avanzada',
      subtitle: 'Integración en Tiempo Real',
      description: 'Capacidad para conectar el mundo del software empresarial con entornos gráficos interactivos. Desarrollo servicios en **Spring Boot** encargados de consumir, normalizar y exponer flujos de datos en tiempo casi real, canalizándolos de forma eficiente hacia motores como **Unity** para simulaciones físicas complejas.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>`
    },
    {
      title: 'Automatización con IA',
      subtitle: 'Ingeniería de Contexto & Agentes',
      description: 'Optimizo los flujos de desarrollo utilizando Inteligencia Artificial como un colaborador estratégico. Diseño e implemento entornos de ejecución automatizados basados en **agentes efímeros** e **inyección de contexto modular (Skills)**, aplicando flujos de revisión humana (<em>Human-in-the-Loop</em>) para garantizar estándares de **Clean Code**.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-4 5-2-2-4-3-4-5a4 4 0 0 1 4-4z"/>
        <path d="M4 22v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
        <line x1="12" y1="11" x2="12" y2="18"/>
        <line x1="8" y1="15" x2="16" y2="15"/>
      </svg>`
    }
  ];
}
