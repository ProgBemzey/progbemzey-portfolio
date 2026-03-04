import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../core/services/language';

interface TechItem {
  icon: string;
  name: string;
  levelEs: string;
  levelEn: string;
  levelClass: 'level-expert' | 'level-mid' | 'level-basic';
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgClass],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  langService = inject(LanguageService);
  isSpanish = this.langService.lang;

  techs: TechItem[] = [
    { icon: '🅰️', name: 'Angular 18+', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '⚡', name: 'Signals', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '🔷', name: 'TypeScript', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '🎨', name: 'SCSS / CSS', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '💠', name: 'Tailwind CSS', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '🪟', name: 'Ang. Material', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '🟣', name: 'ASP .NET Core 8', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '🐘', name: 'PostgreSQL', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '🟢', name: 'Node + Express', levelEs: 'Intermedio', levelEn: 'Intermediate', levelClass: 'level-mid' },
    { icon: '🐘', name: 'Laravel', levelEs: 'Intermedio', levelEn: 'Intermediate', levelClass: 'level-mid' },
    { icon: '☕', name: 'Java Web', levelEs: 'Intermedio', levelEn: 'Intermediate', levelClass: 'level-mid' },
    { icon: '⚛️', name: 'React', levelEs: 'Básico', levelEn: 'Basic', levelClass: 'level-basic' },
    { icon: '🐬', name: 'MySQL / SQL Server', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '🐙', name: 'GitHub', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
    { icon: '📮', name: 'Postman / Swagger', levelEs: 'Avanzado', levelEn: 'Advanced', levelClass: 'level-expert' },
  ];
}