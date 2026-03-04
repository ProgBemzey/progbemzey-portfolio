import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/services/language';
import { NgClass } from '@angular/common';

interface SocialLink {
  icon: string;
  name: string;
  handle: string;
  url: string;
  colorClass: string;
}

interface ContactForm {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface ServiceOption {
  labelEs: string;
  labelEn: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  langService = inject(LanguageService);
  isSpanish = this.langService.lang;

  form: ContactForm = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  sent = signal(false);

  socials: SocialLink[] = [
    {
      icon: '💬',
      name: 'WhatsApp',
      handle: '+51 903 251 140',
      url: 'https://wa.me/51903251140',
      colorClass: 'wa'
    },
    {
      icon: '📸',
      name: 'Instagram',
      handle: '@progbemzey',
      url: 'https://instagram.com/progbemzey',
      colorClass: 'ig'
    },
    {
      icon: '💼',
      name: 'LinkedIn',
      handle: 'ProgBemzey',
      url: 'https://linkedin.com/in/progbemzey',
      colorClass: 'li'
    },
  ];

  serviceOptions: ServiceOption[] = [
    { labelEs: 'Landing Page', labelEn: 'Landing Page' },
    { labelEs: 'Web Corporativa', labelEn: 'Corporate Website' },
    { labelEs: 'App Web Full-Stack', labelEn: 'Full-Stack Web App' },
    { labelEs: 'API REST / Backend', labelEn: 'REST API / Backend' },
    { labelEs: 'E-commerce Básico', labelEn: 'Basic E-commerce' },
    { labelEs: 'Mantenimiento', labelEn: 'Maintenance' },
    { labelEs: 'Otro', labelEn: 'Other' },
  ];

  sendWhatsApp() {
    const { name, email, service, message } = this.form;

    if (!name.trim() || !message.trim()) {
      alert(
        this.isSpanish()
          ? 'Por favor completa tu nombre y mensaje.'
          : 'Please fill in your name and message.'
      );
      return;
    }

    const greeting = this.isSpanish() ? 'Hola ProgBemzey' : 'Hello ProgBemzey';
    const emailLine = email ? `\n📧 ${this.isSpanish() ? 'Correo' : 'Email'}: ${email}` : '';
    const svcLine = service ? `\n🛠️ ${this.isSpanish() ? 'Servicio' : 'Service'}: ${service}` : '';
    const text = `${greeting}, mi nombre es *${name}*.${emailLine}${svcLine}\n\n${message}`;

    window.open(`https://wa.me/51903251140?text=${encodeURIComponent(text)}`, '_blank');
    this.sent.set(true);

    setTimeout(() => {
      this.sent.set(false);
      this.form = { name: '', email: '', service: '', message: '' };
    }, 3000);
  }
}