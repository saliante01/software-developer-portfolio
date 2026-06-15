import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Lang = 'es' | 'en';

interface TranslationDict {
  [key: string]: { es: string; en: string };
}

const TRANSLATIONS: TranslationDict = {
  'nav.inicio': { es: 'Inicio', en: 'Home' },
  'nav.tecnologias': { es: 'Tecnologías', en: 'Technologies' },
  'nav.proyectos': { es: 'Proyectos', en: 'Projects' },
  'nav.experiencia': { es: 'Experiencia', en: 'Experience' },
  'nav.enfoque': { es: 'Enfoque', en: 'Approach' },
  'nav.contacto': { es: 'Contacto', en: 'Contact' },
  'nav.menu': { es: 'Menú', en: 'Menu' },
  'hero.hi': { es: 'HOLA, SOY', en: "HI, I'M" },
  'hero.desc': {
    es: 'Estudiante de Ingeniería Civil Informática en la Universidad de La Frontera, Temuco, Chile. Interesado en el desarrollo de software y la creación de soluciones tecnológicas.',
    en: 'Computer Engineering student at Universidad de La Frontera, Temuco, Chile. Interested in software development and building technological solutions.'
  },
  'about.intro': { es: 'Introducción', en: 'Introduction' },
  'about.overview': { es: 'Visión General.', en: 'Overview.' },
  'about.desc': {
    es: 'Soy estudiante de Ingeniería Civil Informática con interés en el desarrollo backend y full stack. Me enfoco en construir soluciones organizadas, mantenibles y orientadas a resolver necesidades reales, aplicando buenas prácticas de programación, diseño de APIs, arquitectura de software y principios de Clean Code.\n\nActualmente trabajo en proyectos con Java, Spring Boot, Angular y PostgreSQL, y busco seguir aprendiendo sobre arquitectura backend, patrones de diseño, principios SOLID y arquitectura cloud. También me interesa explorar metodologías modernas como Spec-Driven Design y el uso responsable de herramientas de IA como apoyo al desarrollo de software.',
    en: 'I am a Computer Engineering student with an interest in backend and full stack development. I focus on building organized, maintainable solutions oriented toward solving real needs, applying good programming practices, API design, software architecture, and Clean Code principles.\n\nI currently work on projects with Java, Spring Boot, Angular, and PostgreSQL, and I seek to continue learning about backend architecture, design patterns, SOLID principles, and cloud architecture. I am also interested in exploring modern methodologies like Spec-Driven Design and the responsible use of AI tools to support software development.'
  },
  'about.card.backend': { es: 'Desarrollador Backend', en: 'Backend Developer' },
  'about.card.uix': { es: 'Diseño UI/UX', en: 'UI/UX Design' },
  'about.card.frontend': { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
  'about.card.prototype': { es: 'Prototipado de Software', en: 'Software Prototyping' },
  'exp.skills': { es: 'Mis Habilidades', en: 'My Skills' },
  'exp.techs': { es: 'Tecnologías.', en: 'Technologies.' },
  'projects.cases': { es: 'Casos de Estudio', en: 'Case Studies' },
  'projects.title': { es: 'Proyectos.', en: 'Projects.' },
  'projects.intro': {
    es: 'Estos proyectos demuestran mi experiencia con ejemplos prácticos de mi trabajo, incluyendo descripciones breves y enlaces a repositorios de código y demos en vivo.',
    en: 'These projects demonstrate my expertise with practical examples of my work, including brief descriptions and links to code repositories and live demos.'
  },
  'projects.demo': { es: 'Demo en Vivo', en: 'Live Demo' },
  'projects.architecture': { es: 'Enfoque Arquitectónico', en: 'Architectural Approach' },
  'projects.contracts': { es: 'Contratos & Diseño', en: 'Contracts & Design' },
  'projects.name.analytics': { es: 'PLATAFORMA DE ANALÍTICA', en: 'ANALYTICS PLATFORM' },
  'projects.name.doctorado': { es: 'DOCTORADO COMUNICACIÓN — IDEAUFRO', en: 'PhD COMMUNICATION — IDEAUFRO' },
  'projects.name.trafico': { es: 'SIMULADOR DE TRÁFICO — CCHC', en: 'TRAFFIC SIMULATOR — CCHC' },
  'projects.name.camp': { es: 'PLATAFORMA DE GESTIÓN — EXTREME ADVENTURE', en: 'CAMP MANAGEMENT PLATFORM — EXTREME ADVENTURE' },
  'projects.name.prototypes': { es: 'PROTOTIPOS INTERACTIVOS — ABSTRACT DIGITAL', en: 'INTERACTIVE PROTOTYPES — ABSTRACT DIGITAL' },
  'projects.name.wind': { es: 'SIMULADOR DE ENERGÍA EÓLICA — FF STUDIOS', en: 'WIND ENERGY SIMULATOR — FF STUDIOS' },
  'projects.desc.analytics': {
    es: 'Ecosistema de analítica de aprendizaje y evaluación curricular técnica-profesional por competencias transversales, escalable y con versionamiento de evaluaciones locales.',
    en: 'Learning analytics and technical-professional curriculum assessment ecosystem for cross-cutting competencies, scalable and with local assessment versioning.'
  },
  'projects.desc.doctorado': {
    es: 'Refactorización integral y rediseño UX/UI del sistema web del Doctorado en Comunicación de la Universidad de La Frontera para optimizar la gestión académica.',
    en: 'Full refactor and UX/UI redesign of the PhD in Communication web system at Universidad de La Frontera to optimize academic management.'
  },
  'projects.desc.trafico': {
    es: 'Sistema de análisis e integración de datos de tráfico en tiempo casi real para la simulación interactiva y optimización de flujos vehiculares urbanos.',
    en: 'Near-real-time traffic data analysis and integration system for interactive simulation and optimization of urban vehicle flows.'
  },
  'projects.desc.camp': {
    es: 'Plataforma web integral para la gestión y administración de operaciones, inscripciones y logística de campamentos de verano en la ciudad de Pucón.',
    en: 'Comprehensive web platform for managing operations, registrations, and logistics for summer camps in Pucón.'
  },
  'projects.desc.prototypes': {
    es: 'Diseño y desarrollo autónomo de prototipos digitales interactivos en plataformas táctiles orientados a presentaciones comerciales para clientes B2B.',
    en: 'Independent design and development of interactive digital prototypes on touch platforms for B2B commercial presentations.'
  },
  'projects.desc.wind': {
    es: 'Diseño y construcción de un entorno virtual interactivo para la simulación física y visual de sistemas de generación de energía eólica.',
    en: 'Design and construction of an interactive virtual environment for the physical and visual simulation of wind power generation systems.'
  },
  'projects.arch.analytics': {
    es: 'Monolito modular con Arquitectura Hexagonal por capas. Base de datos aislada mediante múltiples esquemas independientes en PostgreSQL.',
    en: 'Modular monolith with layered Hexagonal Architecture. Database isolation through multiple independent PostgreSQL schemas.'
  },
  'projects.arch.doctorado': {
    es: 'Refactorización de código legado. Optimización de la estructura del frontend mediante componentes reutilizables y desacoplamiento de vistas.',
    en: 'Legacy code refactoring. Frontend structure optimization through reusable components and decoupled views.'
  },
  'projects.arch.trafico': {
    es: 'Consumo, normalización y exposición de fuentes de datos (Google Maps y Waze) mediante servicios backend asíncronos.',
    en: 'Consumption, normalization, and exposure of data sources (Google Maps and Waze) through asynchronous backend services.'
  },
  'projects.arch.camp': {
    es: 'Arquitectura Cliente-Servidor desacoplada. Backend centralizado para el control transaccional de registros y persistencia de datos.',
    en: 'Decoupled client-server architecture. Centralized backend for transactional registration control and data persistence.'
  },
  'projects.arch.prototypes': {
    es: 'Desarrollo autónomo de soluciones interactivas basadas en componentes y control de versiones bajo un flujo de integración continua.',
    en: 'Independent development of component-based interactive solutions with version control under a continuous integration workflow.'
  },
  'projects.arch.wind': {
    es: 'Implementación de físicas de simulación y gestión de estados lógicos concurrentes dentro del motor de ejecución gráfico.',
    en: 'Implementation of simulation physics and concurrent logical state management inside the graphical runtime engine.'
  },
  'projects.contract.analytics': {
    es: 'Domain Events (Spring) · Puertos y Adaptadores JPA · Migraciones con Flyway.',
    en: 'Domain Events (Spring) · JPA Ports and Adapters · Flyway migrations.'
  },
  'projects.contract.doctorado': {
    es: 'Diseño centrado en el usuario (DCU) · Prototipado UX/UI en Figma · Interfaces accesibles y flujos de navegación optimizados.',
    en: 'User-centered design (UCD) · UX/UI prototyping in Figma · Accessible interfaces and optimized navigation flows.'
  },
  'projects.contract.trafico': {
    es: 'Integración de REST APIs externas · Canalización de datos hacia entornos gráficos distribuidos.',
    en: 'External REST API integration · Data pipelines into distributed graphical environments.'
  },
  'projects.contract.camp': {
    es: 'APIs REST estructuradas · Validación de flujos de usuario en frontend · Modelamiento relacional de datos.',
    en: 'Structured REST APIs · Frontend user-flow validation · Relational data modeling.'
  },
  'projects.contract.prototypes': {
    es: 'Transformación de requerimientos funcionales en soluciones digitales mediante ciclos de iteración continua con supervisión técnica.',
    en: 'Transformation of functional requirements into digital solutions through continuous iteration cycles with technical supervision.'
  },
  'projects.contract.wind': {
    es: 'Modelamiento de variables técnicas en tiempo real y optimización de rendimiento para renderizado tridimensional interactivo.',
    en: 'Real-time modeling of technical variables and performance optimization for interactive 3D rendering.'
  },
  'projects.cat.fullstack': { es: 'FULL STACK', en: 'FULL STACK' },
  'projects.cat.uixfrontend': { es: 'UX/UI Y FRONTEND', en: 'UX/UI & FRONTEND' },
  'projects.cat.innovacion': { es: 'INNOVACIÓN Y BACKEND', en: 'INNOVATION & BACKEND' },
  'projects.cat.devfullstack': { es: 'DESARROLLADOR FULL STACK', en: 'FULL STACK DEVELOPER' },
  'projects.cat.practica2': { es: 'PRÁCTICA II — PROTOTIPADO DE SOFTWARE', en: 'INTERNSHIP II — SOFTWARE PROTOTYPING' },
  'projects.cat.practica1': { es: 'PRÁCTICA I — PROTOTIPADO DE SOFTWARE', en: 'INTERNSHIP I — SOFTWARE PROTOTYPING' },
  'work.done': { es: 'Lo que he hecho hasta ahora', en: "What I've done so far" },
  'work.title': { es: 'Experiencia Laboral.', en: 'Work Experience.' },
  'work.resume': { es: 'Mi Currículum', en: 'My Resume' },
  'work.role.lead': { es: 'Desarrollador Principal & Arquitecto de Software', en: 'Lead Developer & Software Architect' },
  'work.role.uxui': { es: 'Desarrollador UX/UI Frontend', en: 'UX/UI Frontend Developer' },
  'work.role.backend': { es: 'Desarrollador Backend (Desafío de Innovación)', en: 'Backend Developer (Innovation Challenge)' },
  'work.role.fullstack': { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
  'work.role.intern2': { es: 'Práctica Profesional II (Prototipado de Software)', en: 'Professional Internship II (Software Prototyping)' },
  'work.role.intern1': { es: 'Práctica Profesional I (Prototipado de Software)', en: 'Professional Internship I (Software Prototyping)' },
  'work.company.innovation': { es: 'Iniciativa de Innovación Académica y Tecnológica (Fase I+D)', en: 'Academic and Technological Innovation Initiative (R&D Phase)' },
  'work.company.ideaufro': { es: 'Departamento de Innovación Académica y Tecnológica — IDEAUFRO', en: 'Academic and Technological Innovation Department — IDEAUFRO' },
  'work.company.cchc': { es: 'Cámara Chilena de la Construcción (CChC)', en: 'Chilean Chamber of Construction (CChC)' },
  'work.company.extreme': { es: 'Extreme Adventure Academy', en: 'Extreme Adventure Academy' },
  'work.company.abstract': { es: 'Abstract Digital Works', en: 'Abstract Digital Works' },
  'work.company.ff': { es: 'FF Studios', en: 'FF Studios' },
  'work.date.current': { es: '2026 – Presente', en: '2026 – Present' },
  'work.date.ideaufro': { es: 'Jun 2025 – Oct 2025', en: 'Jun 2025 – Oct 2025' },
  'work.date.cchc': { es: 'Nov 2025', en: 'Nov 2025' },
  'work.date.extreme': { es: 'Abr 2025', en: 'Apr 2025' },
  'work.date.abstract': { es: 'Feb 2025 – Mar 2025', en: 'Feb 2025 – Mar 2025' },
  'work.date.ff': { es: '2024', en: '2024' },
  'contact.touch': { es: 'Ponte en contacto', en: 'Get in touch' },
  'contact.title': { es: 'Contacto.', en: 'Contact.' },
  'contact.desc': {
    es: 'Siempre abierto a nuevas oportunidades, proyectos y colaboraciones. No dudes en escribirme por cualquiera de estos medios.',
    en: 'Always open to new opportunities, projects, and collaborations. Feel free to reach out through any of these channels.'
  },
  'contact.linkedin': { es: 'LinkedIn', en: 'LinkedIn' },
  'contact.github': { es: 'GitHub', en: 'GitHub' },
  'contact.email': { es: 'Correo Electrónico', en: 'Email' },
  'engineering.subtitle': { es: 'Fundamentos de Ingeniería', en: 'Engineering Fundamentals' },
  'engineering.title': { es: 'Enfoque de Ingeniería.', en: 'Engineering Approach.' },
  'engineering.card1.title': { es: 'Arquitectura & Diseño', en: 'Architecture & Design' },
  'engineering.card1.subtitle': { es: 'FUNDAMENTOS DE ARQUITECTURA Y DDD', en: 'ARCHITECTURE FUNDAMENTALS & DDD' },
  'engineering.card1.desc': {
    es: 'Estoy desarrollando conocimientos en arquitectura de software, especialmente en Arquitectura Hexagonal y Domain-Driven Design. En mis proyectos intento separar la lógica de negocio de la infraestructura, organizar mejor las responsabilidades del código y comprender el uso de contextos delimitados para construir soluciones más ordenadas y fáciles de mantener.',
    en: 'I am developing knowledge in software architecture, especially in Hexagonal Architecture and Domain-Driven Design. In my projects I try to separate business logic from infrastructure, better organize code responsibilities, and understand the use of bounded contexts to build cleaner, more maintainable solutions.'
  },
  'engineering.card2.title': { es: 'Ecosistema de Datos', en: 'Data Ecosystem' },
  'engineering.card2.subtitle': { es: 'MODELADO Y ORGANIZACIÓN DE DATOS', en: 'DATA MODELING & ORGANIZATION' },
  'engineering.card2.desc': {
    es: 'He trabajado con bases de datos relacionales, principalmente PostgreSQL, aplicando conceptos de modelado, modularidad y separación de responsabilidades. También he utilizado migraciones versionadas con Flyway para gestionar cambios en la estructura de la base de datos de forma controlada durante el desarrollo.',
    en: 'I have worked with relational databases, mainly PostgreSQL, applying concepts of modeling, modularity, and separation of concerns. I have also used versioned migrations with Flyway to manage database structure changes in a controlled way during development.'
  },
  'engineering.card3.title': { es: 'Simulación e Integración', en: 'Simulation & Integration' },
  'engineering.card3.subtitle': { es: 'INTEGRACIÓN DE SISTEMAS', en: 'SYSTEMS INTEGRATION' },
  'engineering.card3.desc': {
    es: 'He participado en proyectos que combinan servicios desarrollados con Spring Boot y entornos interactivos creados con Unity. Mi experiencia incluye el consumo, procesamiento y exposición de datos mediante APIs, además de la comunicación entre distintos módulos de una solución de software.',
    en: 'I have participated in projects that combine services developed with Spring Boot and interactive environments built with Unity. My experience includes consuming, processing, and exposing data through APIs, as well as communication between different modules of a software solution.'
  },
  'engineering.card4.title': { es: 'Automatización con IA', en: 'AI Automation' },
  'engineering.card4.subtitle': { es: 'IA COMO APOYO AL DESARROLLO', en: 'AI AS DEVELOPMENT SUPPORT' },
  'engineering.card4.desc': {
    es: 'Utilizo herramientas de inteligencia artificial como apoyo para investigar conceptos, revisar alternativas de implementación, detectar posibles mejoras y documentar soluciones. Procuro validar manualmente las respuestas generadas y mantener el control sobre las decisiones técnicas y la calidad del código.',
    en: 'I use artificial intelligence tools to research concepts, review implementation alternatives, identify potential improvements, and document solutions. I make sure to manually validate generated responses and maintain control over technical decisions and code quality.'
  },
};

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private currentLang = new BehaviorSubject<Lang>('es');
  lang$ = this.currentLang.asObservable();

  constructor() {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'es') {
      this.currentLang.next(saved);
    }
  }

  get lang(): Lang {
    return this.currentLang.value;
  }

  switchLang() {
    const next: Lang = this.lang === 'es' ? 'en' : 'es';
    this.currentLang.next(next);
    localStorage.setItem('lang', next);
  }

  translate(key: string): string {
    return TRANSLATIONS[key]?.[this.lang] ?? key;
  }
}
