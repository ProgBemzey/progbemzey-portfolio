import { Component, inject, OnInit, signal } from '@angular/core';
import { LanguageService } from '../../core/services/language';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  langService = inject(LanguageService);
  isSpanish = this.langService.lang;
  visible = signal(false);

  ngOnInit() {
    setTimeout(() => this.visible.set(true), 100);
  }

  scrollTo(target: string) {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  }
}