import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

interface ProjectCard {
  name: string;
  nameKey: string;
  description: string;
  descriptionKey: string;
  image: string;
  icon?: string;
  sourceCodeLink: string;
  liveDemoLink: string;
  architecturalApproach: string;
  architecturalApproachKey: string;
  contractsAndDesign: string;
  contractsAndDesignKey: string;
  stack: string[];
  category: string;
  categoryKey: string;
  year: string | number;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslatePipe],
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
      name: 'PLATAFORMA DE ANALÍTICA',
      nameKey: 'projects.name.analytics',
      description: 'Ecosistema de analítica de aprendizaje y evaluación curricular técnica-profesional por competencias transversales, escalable y con versionamiento de evaluaciones locales.',
      descriptionKey: 'projects.desc.analytics',
      image: '/software-analitica.png', 
      sourceCodeLink: '', 
      liveDemoLink: '',  
      architecturalApproach: 'Monolito modular con Arquitectura Hexagonal por capas. Base de datos aislada mediante múltiples esquemas independientes en PostgreSQL.',
      architecturalApproachKey: 'projects.arch.analytics',
      contractsAndDesign: 'Domain Events (Spring) · Puertos y Adaptadores JPA · Migraciones con Flyway.',
      contractsAndDesignKey: 'projects.contract.analytics',
      stack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Angular 21', 'TypeScript 5.9', 'Tailwind 4', 'JUnit', 'Docker'],
      category: 'FULL STACK',
      categoryKey: 'projects.cat.fullstack',
      year: '2025–2026'
    },
    {
      name: 'DOCTORADO COMUNICACIÓN — IDEAUFRO',
      nameKey: 'projects.name.doctorado',
      description: 'Refactorización integral y rediseño UX/UI del sistema web del Doctorado en Comunicación de la Universidad de La Frontera para optimizar la gestión académica.',
      descriptionKey: 'projects.desc.doctorado',
      image: '/doctorado.png',
      icon: '/idea_ufro.png',
      sourceCodeLink: '',
      liveDemoLink: '',
      architecturalApproach: 'Refactorización de código legado. Optimización de la estructura del frontend mediante componentes reutilizables y desacoplamiento de vistas.',
      architecturalApproachKey: 'projects.arch.doctorado',
      contractsAndDesign: 'Diseño centrado en el usuario (DCU) · Prototipado UX/UI en Figma · Interfaces accesibles y flujos de navegación optimizados.',
      contractsAndDesignKey: 'projects.contract.doctorado',
      stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git'],
      category: 'UX/UI Y FRONTEND',
      categoryKey: 'projects.cat.uixfrontend',
      year: 2025
    },
    {
      name: 'SIMULADOR DE TRÁFICO — CCHC',
      nameKey: 'projects.name.trafico',
      description: 'Sistema de análisis e integración de datos de tráfico en tiempo casi real para la simulación interactiva y optimización de flujos vehiculares urbanos[cite: 1].',
      descriptionKey: 'projects.desc.trafico',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&auto=format&fit=crop',
      icon: '/cchc.png',
      sourceCodeLink: '',
      liveDemoLink: '',
      architecturalApproach: 'Consumo, normalización y exposición de fuentes de datos (Google Maps y Waze) mediante servicios backend asíncronos[cite: 1].',
      architecturalApproachKey: 'projects.arch.trafico',
      contractsAndDesign: 'Integración de REST APIs externas · Canalización de datos hacia entornos gráficos distribuidos[cite: 1].',
      contractsAndDesignKey: 'projects.contract.trafico',
      stack: ['Java', 'Spring Boot', 'Unity', 'C#', 'REST APIs', 'Git'],
      category: 'INNOVACIÓN Y BACKEND',
      categoryKey: 'projects.cat.innovacion',
      year: 2025
    },
    {
      name: 'PLATAFORMA DE GESTIÓN — EXTREME ADVENTURE',
      nameKey: 'projects.name.camp',
      description: 'Plataforma web integral para la gestión y administración de operaciones, inscripciones y logística de campamentos de verano en la ciudad de Pucón.',
      descriptionKey: 'projects.desc.camp',
      image: '/extremeadventure.png',
      icon: '/eaa.png',
      sourceCodeLink: '',
      liveDemoLink: '',
      architecturalApproach: 'Arquitectura Cliente-Servidor desacoplada. Backend centralizado para el control transaccional de registros y persistencia de datos.',
      architecturalApproachKey: 'projects.arch.camp',
      contractsAndDesign: 'APIs REST estructuradas · Validación de flujos de usuario en frontend · Modelamiento relacional de datos.',
      contractsAndDesignKey: 'projects.contract.camp',
      stack: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'SQL', 'Git'],
      category: 'DESARROLLADOR FULL STACK',
      categoryKey: 'projects.cat.devfullstack',
      year: 2025
    },
    {
      name: 'PROTOTIPOS INTERACTIVOS — ABSTRACT DIGITAL',
      nameKey: 'projects.name.prototypes',
      description: 'Diseño y desarrollo autónomo de prototipos digitales interactivos en plataformas táctiles orientados a presentaciones comerciales para clientes B2B[cite: 1].',
      descriptionKey: 'projects.desc.prototypes',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop',
      icon: '/abstract_digital.jpeg',
      sourceCodeLink: '',
      liveDemoLink: '',
      architecturalApproach: 'Desarrollo autónomo de soluciones interactivas basadas en componentes y control de versiones bajo un flujo de integración continua[cite: 1].',
      architecturalApproachKey: 'projects.arch.prototypes',
      contractsAndDesign: 'Transformación de requerimientos funcionales en soluciones digitales mediante ciclos de iteración continua con supervisión técnica[cite: 1].',
      contractsAndDesignKey: 'projects.contract.prototypes',
      stack: ['Unity', 'C#', 'GitLab', 'UI/UX Design'],
      category: 'PRÁCTICA II — PROTOTIPADO DE SOFTWARE',
      categoryKey: 'projects.cat.practica2',
      year: 2025
    },
    {
      name: 'SIMULADOR DE ENERGÍA EÓLICA — FF STUDIOS',
      nameKey: 'projects.name.wind',
      description: 'Diseño y construcción de un entorno virtual interactivo para la simulación física y visual de sistemas de generación de energía eólica.',
      descriptionKey: 'projects.desc.wind',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop',
      icon: '/logo-ffstudios.png',
      sourceCodeLink: '',
      liveDemoLink: '',
      architecturalApproach: 'Implementación de físicas de simulación y gestión de estados lógicos concurrentes dentro del motor de ejecución gráfico.',
      architecturalApproachKey: 'projects.arch.wind',
      contractsAndDesign: 'Modelamiento de variables técnicas en tiempo real y optimización de rendimiento para renderizado tridimensional interactivo.',
      contractsAndDesignKey: 'projects.contract.wind',
      stack: ['Unity', 'C#', 'UI/UX Design', 'Git'],
      category: 'PRÁCTICA I — PROTOTIPADO DE SOFTWARE',
      categoryKey: 'projects.cat.practica1',
      year: 2024
    }
  ];
}
