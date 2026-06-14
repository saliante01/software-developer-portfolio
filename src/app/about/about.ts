import { Component, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

interface ServiceCard {
  titleKey: string;
  iconSvg: string;
  visible: boolean;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

  @ViewChild('cardsSection') cardsSection!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  services: ServiceCard[] = [
    {
      titleKey: 'about.card.backend',
      iconSvg: 'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/outline/network.svg',
      visible: false
    },
    {
      titleKey: 'about.card.uix',
      iconSvg: 'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/outline/layout-dashboard.svg',
      visible: false
    },
    {
      titleKey: 'about.card.frontend',
      iconSvg: 'https://cdn.jsdelivr.net/npm/@tabler/icons/icons/outline/code.svg',
      visible: false
    },
    {
      titleKey: 'about.card.prototype',
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