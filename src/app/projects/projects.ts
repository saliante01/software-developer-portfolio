import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectCard {
  name: string;
  description: string;
  image: string;
  icon?: string;
  sourceCodeLink: string;
  liveDemoLink: string;
  architecturalApproach: string;
  contractsAndDesign: string;
  stack: string[];
  category: string;
  year: string | number;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {

  @ViewChild('projectsRef') projectsRef!: ElementRef;

  activeIndex = -1;
  hasAnimated = false;
  private animationTriggered = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animationTriggered) {
            this.animationTriggered = true;
            this.activeIndex = 0;
            this.cdr.detectChanges();

            setTimeout(() => {
              this.hasAnimated = true;
              this.cdr.detectChanges();
            }, 2100);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.projectsRef.nativeElement);
  }

  selectProject(index: number) {
    this.activeIndex = index;
  }

  projects: ProjectCard[] = [
    {
      name: 'ANALYTICS PLATFORM',
      description: 'Ecosistema de analítica de aprendizaje y evaluación curricular técnica-profesional por competencias transversales, escalable y con versionamiento de evaluaciones locales.',
      image: '/software-analitica.png', 
      sourceCodeLink: 'https://github.com', 
      liveDemoLink: 'https://netlify.app',  
      architecturalApproach: 'Monolito modular con Arquitectura Hexagonal por capas. Base de datos aislada mediante múltiples esquemas independientes en PostgreSQL.',
      contractsAndDesign: 'Domain Events (Spring) · Puertos y Adaptadores JPA · Migraciones con Flyway.',
      stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Angular 21', 'TypeScript 5.9', 'Tailwind 4', 'JUnit', 'Docker'],
      category: 'FULL STACK',
      year: '2025–2026'
    },
    {
      name: 'DOCTORADO COMUNICACIÓN — IDEAUFRO',
      description: 'Refactorización integral y rediseño UX/UI del sistema web del Doctorado en Comunicación de la Universidad de La Frontera para optimizar la gestión académica.',
      image: '/doctorado.png',
      icon: '/idea_ufro.png',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app',
      architecturalApproach: 'Refactorización de código legado. Optimización de la estructura del frontend mediante componentes reutilizables y desacoplamiento de vistas.',
      contractsAndDesign: 'Diseño centrado en el usuario (DCU) · Prototipado UX/UI en Figma · Interfaces accesibles y flujos de navegación optimizados.',
      stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git'],
      category: 'UX/UI & FRONTEND',
      year: 2025
    },
    {
      name: 'TRAFFIC SIMULATOR — CCHC',
      description: 'Sistema de análisis e integración de datos de tráfico en tiempo casi real para la simulación interactiva y optimización de flujos vehiculares urbanos[cite: 1].',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&auto=format&fit=crop',
      icon: '/cchc.png',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app',
      architecturalApproach: 'Consumo, normalización y exposición de fuentes de datos (Google Maps y Waze) mediante servicios backend asíncronos[cite: 1].',
      contractsAndDesign: 'Integración de REST APIs externas · Canalización de datos hacia entornos gráficos distribuidos[cite: 1].',
      stack: ['Java', 'Spring Boot', 'Unity', 'C#', 'REST APIs', 'Git'],
      category: 'INNOVACIÓN & BACKEND',
      year: 2025
    },
    {
      name: 'CAMP MANAGEMENT PLATFORM — EXTREME ADVENTURE',
      description: 'Plataforma web integral para la gestión y administración de operaciones, inscripciones y logística de campamentos de verano en la ciudad de Pucón.',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop', // Imagen referencial de campamentos/naturaleza
      icon: '/eaa.png', // Ajusta la ruta a su logo si corresponde
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app',
      architecturalApproach: 'Arquitectura Cliente-Servidor desacoplada. Backend centralizado para el control transaccional de registros y persistencia de datos.',
      contractsAndDesign: 'APIs REST estructuradas · Validación de flujos de usuario en frontend · Modelamiento relacional de datos.',
      stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'SQL', 'Git'],
      category: 'FULL STACK DEVELOPER',
      year: 2025 // Ajusta el año exacto de este desarrollo si fuese necesario
    },
    {
      name: 'INTERACTIVE PROTOTYPES — ABSTRACT DIGITAL',
      description: 'Diseño y desarrollo autónomo de prototipos digitales interactivos en plataformas táctiles orientados a presentaciones comerciales para clientes B2B[cite: 1].',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop',
      icon: '/abstract_digital.jpeg',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app',
      architecturalApproach: 'Desarrollo autónomo de soluciones interactivas basadas en componentes y control de versiones bajo un flujo de integración continua[cite: 1].',
      contractsAndDesign: 'Transformación de requerimientos funcionales en soluciones digitales mediante ciclos de iteración continua con supervisión técnica[cite: 1].',
      stack: ['Unity', 'C#', 'GitLab', 'UI/UX Design'],
      category: 'PRÁCTICA II — SOFTWARE PROTOTYPING',
      year: 2025
    },
    {
      name: 'WIND ENERGY SIMULATOR — FF STUDIOS',
      description: 'Diseño y construcción de un entorno virtual interactivo para la simulación física y visual de sistemas de generación de energía eólica.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop',
      icon: '/logo-ffstudios.png',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app',
      architecturalApproach: 'Implementación de físicas de simulación y gestión de estados lógicos concurrentes dentro del motor de ejecución gráfico.',
      contractsAndDesign: 'Modelamiento de variables técnicas en tiempo real y optimización de rendimiento para renderizado tridimensional interactivo.',
      stack: ['Unity', 'C#', 'UI/UX Design', 'Git'],
      category: 'PRÁCTICA I — SOFTWARE PROTOTYPING',
      year: 2024
    }
  ];
}