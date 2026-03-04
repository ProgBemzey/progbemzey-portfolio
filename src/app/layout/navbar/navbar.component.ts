import { Component, computed, HostListener, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../core/services/theme';
import { LanguageService } from '../../core/services/language';

interface NavLink {
  labelEs: string;
  labelEn: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  themeService = inject(ThemeService);
  langService = inject(LanguageService);

  menuOpen = signal(false);
  scrolled = signal(false);
  activeSection = signal('hero');

  isDark = computed(() => this.themeService.theme() === 'dark');
  isSpanish = computed(() => this.langService.lang() === 'es');

  private observer!: IntersectionObserver;

  links: NavLink[] = [
    { labelEs: 'Sobre mí', labelEn: 'About', target: 'about' },
    { labelEs: 'Stack', labelEn: 'Stack', target: 'stack' },
    { labelEs: 'Servicios', labelEn: 'Services', target: 'services' },
    { labelEs: 'Proyectos', labelEn: 'Projects', target: 'projects' },
    { labelEs: 'Contacto', labelEn: 'Contact', target: 'contact' },
  ];

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = ['hero', 'about', 'stack', 'services', 'projects', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  scrollTo(target: string) {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleTheme() { this.themeService.toggle(); }
  toggleLang() { this.langService.toggle(); }
  toggleMenu() { this.menuOpen.update(v => !v); }
}