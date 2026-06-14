import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
  visible: boolean;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {

  @ViewChild('sectionRef') sectionRef!: ElementRef;

  headerVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  socials: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sebastian-aliante-poblete-92964a354/',
      icon: 'fa-brands fa-linkedin-in',
      username: '/in/sebastian-aliante-poblete',
      visible: false
    },
    {
      name: 'GitHub',
      url: 'https://github.com/saliante01',
      icon: 'fa-brands fa-github',
      username: '@saliante01',
      visible: false
    },
    {
      name: 'Email',
      url: 'mailto:s.aliante01@ufromail.cl',
      icon: 'fa-solid fa-envelope',
      username: 's.aliante01@ufromail.cl',
      visible: false
    }
  ];

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
              this.showCardsOneByOne(0);
            }, 500);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(this.sectionRef.nativeElement);
  }

  showCardsOneByOne(index: number) {
    if (index >= this.socials.length) return;
    this.socials[index].visible = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.showCardsOneByOne(index + 1);
    }, 150);
  }
}