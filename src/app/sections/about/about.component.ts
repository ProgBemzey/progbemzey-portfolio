import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language';

interface Highlight {
  icon: string;
  labelEs: string;
  labelEn: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  langService = inject(LanguageService);
  isSpanish = this.langService.lang;

  highlights: Highlight[] = [
    {
      icon: 'work',
      labelEs: 'Desarrollador en empresa actual (Angular 20 + .NET)',
      labelEn: 'Current company developer (Angular 20 + .NET)'
    },
    {
      icon: 'layers',
      labelEs: 'Frontend-first con capacidades fullstack',
      labelEn: 'Frontend-first with fullstack capabilities'
    },
    {
      icon: 'speed',
      labelEs: 'Entrega puntual y código documentado',
      labelEn: 'On-time delivery and documented code'
    },
    {
      icon: 'devices',
      labelEs: 'Diseño responsive y mobile-first',
      labelEn: 'Responsive and mobile-first design'
    },
    {
      icon: 'groups',
      labelEs: 'Comunicación clara con el cliente',
      labelEn: 'Clear communication with clients'
    },
  ];
}