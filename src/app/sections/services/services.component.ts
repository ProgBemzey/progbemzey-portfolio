import { Component, inject, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../core/services/language';
import { CurrencyService } from '../../core/services/currency';
import { FadeInDirective } from "../../shared/directives/fade-in";

interface ServiceItem {
  id: string;
  icon: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  pricePen: string;
  priceUsd: string;
  priceTypeEs: string;
  priceTypeEn: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgClass, FadeInDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  langService = inject(LanguageService);
  currencyService = inject(CurrencyService);

  isSpanish = this.langService.lang;
  currency = this.currencyService.currency;
  rate = this.currencyService.exchangeRate;

  isPen = computed(() => this.currency() === 'PEN');

  services: ServiceItem[] = [
    {
      id: 'lp',
      icon: 'web',
      titleEs: 'Landing Page',
      titleEn: 'Landing Page',
      descEs: 'Página de presentación moderna, responsive y optimizada para conversión. HTML/CSS o Angular.',
      descEn: 'Modern, responsive landing page optimized for conversion. HTML/CSS or Angular.',
      pricePen: 'S/ 300 – 600',
      priceUsd: '$80 – $160',
      priceTypeEs: 'Desde',
      priceTypeEn: 'Starting at',
    },
    {
      id: 'corp',
      icon: 'business',
      titleEs: 'Web Corporativa',
      titleEn: 'Corporate Website',
      descEs: 'Sitio web completo con múltiples secciones, animaciones y componentes reutilizables en Angular.',
      descEn: 'Full website with multiple sections, animations and reusable Angular components.',
      pricePen: 'S/ 800 – 2,000',
      priceUsd: '$215 – $535',
      priceTypeEs: 'Desde',
      priceTypeEn: 'Starting at',
    },
    {
      id: 'app',
      icon: 'apps',
      titleEs: 'App Web Full-Stack',
      titleEn: 'Full-Stack Web App',
      descEs: 'Aplicación web completa con Angular + .NET Core + PostgreSQL. Auth, CRUD, dashboard.',
      descEn: 'Complete web application with Angular + .NET Core + PostgreSQL. Auth, CRUD, dashboard.',
      pricePen: 'S/ 2,500 – 6,000',
      priceUsd: '$665 – $1,600',
      priceTypeEs: 'Desde',
      priceTypeEn: 'Starting at',
    },
    {
      id: 'api',
      icon: 'api',
      titleEs: 'API REST / Backend',
      titleEn: 'REST API / Backend',
      descEs: 'Desarrollo de APIs con .NET Core o Node.js + Express, documentación con Swagger.',
      descEn: 'API development with .NET Core or Node.js + Express, documented with Swagger.',
      pricePen: 'S/ 800 – 2,500',
      priceUsd: '$215 – $665',
      priceTypeEs: 'Desde',
      priceTypeEn: 'Starting at',
    },
    {
      id: 'eco',
      icon: 'shopping_cart',
      titleEs: 'E-commerce Básico',
      titleEn: 'Basic E-commerce',
      descEs: 'Tienda online con catálogo, carrito, pasarela de pago y panel de administración.',
      descEn: 'Online store with catalog, cart, payment gateway and admin panel.',
      pricePen: 'S/ 3,000 – 7,000',
      priceUsd: '$800 – $1,865',
      priceTypeEs: 'Desde',
      priceTypeEn: 'Starting at',
    },
    {
      id: 'mnt',
      icon: 'build',
      titleEs: 'Mantenimiento',
      titleEn: 'Maintenance',
      descEs: 'Actualizaciones, corrección de bugs, mejoras de rendimiento y soporte técnico mensual.',
      descEn: 'Updates, bug fixes, performance improvements and monthly technical support.',
      pricePen: 'S/ 150 – 400',
      priceUsd: '$40 – $107',
      priceTypeEs: '/mes',
      priceTypeEn: '/month',
    },
  ];

  setCurrency(c: 'PEN' | 'USD') {
    this.currencyService.toggle(c);
  }
}