import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectCard {
  name: string;
  description: string;
  image: string;
  sourceCodeLink: string;
  liveDemoLink: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  activeIndex = 0;

  selectProject(index: number) {
    this.activeIndex = index;
  }

  projects: ProjectCard[] = [
    {
      name: 'Komikult',
      description: 'A comic characters list app that displays Marvel characters.',
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&auto=format&fit=crop',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app'
    },
    {
      name: 'Leaderboard',
      description: 'A real-time score tracking leaderboard application.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app'
    },
    {
      name: 'Math Magicians',
      description: 'A calculator paired with random math facts.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app'
    },
    {
      name: 'Movie Metro',
      description: 'A movie browsing and discovery application.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app'
    },
    {
      name: 'Nyeusi Fest Site',
      description: 'A festival landing page with schedule and lineup.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop',
      sourceCodeLink: 'https://github.com',
      liveDemoLink: 'https://netlify.app'
    }
  ];
}