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
      url: 'https://linkedin.com/in/tu-usuario',
      icon: 'fa-brands fa-linkedin-in',
      username: '/in/tu-usuario',
      visible: false
    },
    {
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      icon: 'fa-brands fa-github',
      username: '@tu-usuario',
      visible: false
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/tu-usuario',
      icon: 'fa-brands fa-instagram',
      username: '@tu-usuario',
      visible: false
    },
    {
      name: 'X / Twitter',
      url: 'https://x.com/tu-usuario',
      icon: 'fa-brands fa-x-twitter',
      username: '@tu-usuario',
      visible: false
    },
    {
      name: 'Email',
      url: 'mailto:shaq.developer@gmail.com',
      icon: 'fa-solid fa-envelope',
      username: 'shaq.developer@gmail.com',
      visible: false
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/56912345678',
      icon: 'fa-brands fa-whatsapp',
      username: '+56 9 1234 5678',
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