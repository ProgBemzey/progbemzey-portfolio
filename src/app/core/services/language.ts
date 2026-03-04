import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>('es');

  toggle() {
    this.lang.update(l => l === 'es' ? 'en' : 'es');
  }

  t(translations: Record<string, string>): string {
    return translations[this.lang()] ?? '';
  }
}