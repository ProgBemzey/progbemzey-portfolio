import { Component, inject, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../core/services/language';
import { FadeInDirective } from "../../shared/directives/fade-in";

type Category = 'all' | 'enterprise' | 'freelance' | 'personal';

interface ProjectMeta {
  icon: string;
  labelEs: string;
  labelEn: string;
}

interface ProjectLink {
  icon: string;
  labelEs: string;
  labelEn: string;
  url?: string;
  disabled?: boolean;
}

interface Project {
  id: string;
  category: 'enterprise' | 'freelance' | 'personal';
  icon: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  tags: string[];
  meta: ProjectMeta[];
  links: ProjectLink[];
  confidential?: boolean;
  accentColor?: string;
}

interface FilterBtn {
  value: Category;
  labelEs: string;
  labelEn: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgClass, FadeInDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  langService = inject(LanguageService);
  isSpanish = this.langService.lang;

  activeFilter = signal<Category>('all');

  filters: FilterBtn[] = [
    { value: 'all', labelEs: 'Todos', labelEn: 'All' },
    { value: 'enterprise', labelEs: 'Enterprise', labelEn: 'Enterprise' },
    { value: 'freelance', labelEs: 'Freelance', labelEn: 'Freelance' },
    { value: 'personal', labelEs: 'Personal', labelEn: 'Personal' },
  ];

  projects: Project[] = [
    {
      id: 'smart',
      category: 'enterprise',
      icon: '👥',
      titleEs: 'SMART — Gestión de RRHH',
      titleEn: 'SMART — HR Management',
      descEs: 'Sistema empresarial para gestión de colaboradores: permisos, solicitudes, control de asistencia y marcaciones. Desarrollado en equipo bajo metodología SCRUM. Producto comercial en producción.',
      descEn: 'Enterprise system for employee management: leave requests, attendance tracking and approvals. Built with a SCRUM team. Commercial product in production.',
      tags: ['Angular 20', 'Signals', '.NET Core 8', 'PostgreSQL'],
      meta: [
        { icon: 'groups', labelEs: 'Equipo SCRUM', labelEn: 'SCRUM Team' },
        { icon: 'rocket_launch', labelEs: 'En producción', labelEn: 'In production' },
        { icon: 'store', labelEs: 'Prod. comercial', labelEn: 'Commercial product' },
      ],
      links: [],
      confidential: true,
      accentColor: 'rgba(99,102,241,0.15)',
    },
    {
      id: 'audit',
      category: 'enterprise',
      icon: '🏥',
      titleEs: 'Auditoría Médica — Siniestros',
      titleEn: 'Medical Audit — Claims',
      descEs: 'Sistema de gestión de siniestros médicos: informes médicos, cartas de garantía, gestión de clientes y auditoría. Desarrollado en equipo SCRUM.',
      descEn: 'Medical claims management system: medical reports, guarantee letters, client management and audit workflows. SCRUM team project.',
      tags: ['Angular 20', 'Signals', '.NET Core 8', 'PostgreSQL'],
      meta: [
        { icon: 'groups', labelEs: 'Equipo SCRUM', labelEn: 'SCRUM Team' },
        { icon: 'pending', labelEs: 'En desarrollo', labelEn: 'In development' },
        { icon: 'store', labelEs: 'Prod. comercial', labelEn: 'Commercial product' },
      ],
      links: [],
      confidential: true,
      accentColor: 'rgba(99,102,241,0.15)',
    },
    {
      id: 'web1',
      category: 'freelance',
      icon: '🌐',
      titleEs: 'Web Corporativa — Cliente 1',
      titleEn: 'Corporate Website — Client 1',
      descEs: 'Sitio web corporativo responsivo con alto rendimiento. Diseño moderno, animaciones CSS y estructura semántica optimizada.',
      descEn: 'Responsive corporate website with high performance. Modern design, CSS animations and optimized semantic structure.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      meta: [
        { icon: 'speed', labelEs: 'Alto rendimiento', labelEn: 'High performance' },
        { icon: 'public', labelEs: 'Publicado', labelEn: 'Live' },
      ],
      links: [
        { icon: 'open_in_new', labelEs: 'Ver web', labelEn: 'Visit website', url: '#' },
      ],
    },
    {
      id: 'web2',
      category: 'freelance',
      icon: '✨',
      titleEs: 'Web Corporativa — Cliente 2',
      titleEn: 'Corporate Website — Client 2',
      descEs: 'Página web de presentación con diseño atractivo, optimizada para SEO y carga rápida. Responsive en todos los dispositivos.',
      descEn: 'Presentation website with attractive design, SEO-optimized and fast-loading. Responsive across all devices.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      meta: [
        { icon: 'speed', labelEs: 'Alto rendimiento', labelEn: 'High performance' },
        { icon: 'public', labelEs: 'Publicado', labelEn: 'Live' },
      ],
      links: [
        { icon: 'open_in_new', labelEs: 'Ver web', labelEn: 'Visit website', url: '#' },
      ],
    },
    {
      id: 'laravel',
      category: 'freelance',
      icon: '📋',
      titleEs: 'Sistema con Google Sheets',
      titleEn: 'Google Sheets Integration',
      descEs: 'Web conectada a Google Sheets como base de datos dinámica usando Laravel y la Google Sheets API. Operó correctamente hasta que el cliente perdió acceso a los permisos.',
      descEn: 'Web app connected to Google Sheets as a dynamic database using Laravel and Google Sheets API. Worked correctly until the client lost API permissions.',
      tags: ['Laravel', 'Google Sheets API', 'PHP'],
      meta: [
        { icon: 'integration_instructions', labelEs: 'Google Sheets API', labelEn: 'Google Sheets API' },
        { icon: 'info', labelEs: 'Fuera de línea', labelEn: 'Offline' },
      ],
      links: [
        { icon: 'link_off', labelEs: 'Sin acceso (permisos)', labelEn: 'No access (permissions)', disabled: true },
      ],
      accentColor: 'rgba(234,67,53,0.1)',
    },
  ];

  filtered = computed(() => {
    const f = this.activeFilter();
    return f === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === f);
  });

  setFilter(cat: Category) {
    this.activeFilter.set(cat);
  }

  getBadgeClass(category: string): string {
    const map: Record<string, string> = {
      enterprise: 'badge-enterprise',
      freelance: 'badge-freelance',
      personal: 'badge-personal',
    };
    return map[category] ?? '';
  }

  getBadgeLabel(category: string): string {
    const map: Record<string, { es: string; en: string }> = {
      enterprise: { es: 'Enterprise', en: 'Enterprise' },
      freelance: { es: 'Freelance', en: 'Freelance' },
      personal: { es: 'Personal', en: 'Personal' },
    };
    const entry = map[category];
    return entry ? (this.isSpanish() ? entry.es : entry.en) : '';
  }
}