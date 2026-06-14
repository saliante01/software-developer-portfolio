import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  scrollToAbout() {
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
