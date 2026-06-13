import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  title: string;
  iconSvg: string;
  visible: boolean;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

  @ViewChild('cardsSection') cardsSection!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  services: ServiceCard[] = [
    {
      title: 'Frontend Developer',
      iconSvg: 'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/outline/code.svg',
      visible: false
    },
    {
      title: 'Backend Developer',
      iconSvg: 'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/outline/network.svg',
      visible: false
    },
    {
      title: 'UI/UX Design',
      iconSvg: 'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/outline/layout-dashboard.svg',
      visible: false
    },
    {
      title: 'Software Prototyping',
      iconSvg: 'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/outline/devices.svg',
      visible: false
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.showCardsOneByOne(0);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.cardsSection.nativeElement);
  }

  showCardsOneByOne(index: number) {
    if (index >= this.services.length) return;

    this.services[index].visible = true;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.showCardsOneByOne(index + 1);
    }, 700);
  }
}