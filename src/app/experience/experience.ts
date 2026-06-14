import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tech {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements AfterViewInit {

  @ViewChild('sectionRef') sectionRef!: ElementRef;

  headerVisible = false;
  row1Visible = false;
  row2Visible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.headerVisible = true;
            this.cdr.detectChanges();

            setTimeout(() => {
              this.row1Visible = true;
              this.cdr.detectChanges();
            }, 300);

            setTimeout(() => {
              this.row2Visible = true;
              this.cdr.detectChanges();
            }, 900);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(this.sectionRef.nativeElement);
  }

  techRow1: Tech[] = [
    { name: 'Java',              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'C#',                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Domain-Driven Design', icon: '/DDD.svg' },
    { name: 'Clean Architecture',   icon: '/CleanArchitecture.svg' },
    { name: 'PostgreSQL',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL',             icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  techRow2: Tech[] = [
    { name: 'Angular',           icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'TypeScript',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Figma',             icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Docker',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Unity',             icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
    { name: 'Git',               icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Maven',             icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
  ];
}