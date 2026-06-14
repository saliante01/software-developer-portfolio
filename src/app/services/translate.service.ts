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
    es: 'Soy estudiante de Ingeniería Civil Informática enfocado en el diseño y construcción de sistemas de software robustos, mantenibles y escalables. Me interesa la arquitectura backend, la aplicación de patrones de diseño clásicos y la exploración de metodologías modernas como el Spec-Driven Design. Busco resolver problemas complejos mediante código limpio, estructurando soluciones con una fuerte base teórica y técnica.',
    en: 'I am a Computer Engineering student focused on designing and building robust, maintainable, and scalable software systems. I am interested in backend architecture, applying classic design patterns, and exploring modern methodologies like Spec-Driven Design. I strive to solve complex problems through clean code, structuring solutions with a strong theoretical and technical foundation.'
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
  'projects.name.analytics': { es: 'PLATAFORMA DE ANALÍTICA', en: 'ANALYTICS PLATFORM' },
  'projects.name.doctorado': { es: 'DOCTORADO COMUNICACIÓN — IDEAUFRO', en: 'PhD COMMUNICATION — IDEAUFRO' },
  'projects.name.trafico': { es: 'SIMULADOR DE TRÁFICO — CCHC', en: 'TRAFFIC SIMULATOR — CCHC' },
  'projects.name.camp': { es: 'PLATAFORMA DE GESTIÓN — EXTREME ADVENTURE', en: 'CAMP MANAGEMENT PLATFORM — EXTREME ADVENTURE' },
  'projects.name.prototypes': { es: 'PROTOTIPOS INTERACTIVOS — ABSTRACT DIGITAL', en: 'INTERACTIVE PROTOTYPES — ABSTRACT DIGITAL' },
  'projects.name.wind': { es: 'SIMULADOR DE ENERGÍA EÓLICA — FF STUDIOS', en: 'WIND ENERGY SIMULATOR — FF STUDIOS' },
  'projects.cat.fullstack': { es: 'FULL STACK', en: 'FULL STACK' },
  'projects.cat.uixfrontend': { es: 'UX/UI Y FRONTEND', en: 'UX/UI & FRONTEND' },
  'projects.cat.innovacion': { es: 'INNOVACIÓN Y BACKEND', en: 'INNOVATION & BACKEND' },
  'projects.cat.devfullstack': { es: 'DESARROLLADOR FULL STACK', en: 'FULL STACK DEVELOPER' },
  'projects.cat.practica2': { es: 'PRÁCTICA II — PROTOTIPADO DE SOFTWARE', en: 'INTERNSHIP II — SOFTWARE PROTOTYPING' },
  'projects.cat.practica1': { es: 'PRÁCTICA I — PROTOTIPADO DE SOFTWARE', en: 'INTERNSHIP I — SOFTWARE PROTOTYPING' },
  'work.done': { es: 'Lo que he hecho hasta ahora', en: "What I've done so far" },
  'work.title': { es: 'Experiencia Laboral.', en: 'Work Experience.' },
  'work.resume': { es: 'Mi Currículum', en: 'My Resume' },
  'contact.touch': { es: 'Ponte en contacto', en: 'Get in touch' },
  'contact.title': { es: 'Contacto.', en: 'Contact.' },
  'contact.desc': {
    es: 'Siempre abierto a nuevas oportunidades, proyectos y colaboraciones. No dudes en escribirme por cualquiera de estos medios.',
    en: 'Always open to new opportunities, projects, and collaborations. Feel free to reach out through any of these channels.'
  },
  'contact.linkedin': { es: 'LinkedIn', en: 'LinkedIn' },
  'contact.github': { es: 'GitHub', en: 'GitHub' },
  'contact.email': { es: 'Correo Electrónico', en: 'Email' },
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
