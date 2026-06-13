import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExp {
  title: string;
  company: string;
  date: string;
  logo: string;
  visible: boolean;
}

@Component({
  selector: 'app-workexperience',
  imports: [CommonModule],
  templateUrl: './workexperience.html',
  styleUrl: './workexperience.css',
})
export class Workexperience implements AfterViewInit {

  @ViewChild('timelineSection') timelineSection!: ElementRef;

  headerVisible = false;
  lineVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  dots = new Array(16);

  experiences: WorkExp[] = [
    {
      title: 'Front-End Developer',
      company: 'Cover Hunt',
      date: 'Aug 2021 – Feb 2022',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
      visible: false
    },
    {
      title: 'Mentor (Volunteer)',
      company: 'Microverse',
      date: 'Mar 2022 – May 2022',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
      visible: false
    },
    {
      title: 'Junior Software Engineer',
      company: 'Kelhel',
      date: 'May 2022 – Oct 2022',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      visible: false
    },
    {
      title: 'Full Stack Developer',
      company: 'Diversity Cyber Council',
      date: 'Sep 2022 – Present',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg',
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