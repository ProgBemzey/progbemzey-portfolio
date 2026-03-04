import { Injectable, signal } from '@angular/core';

export type Currency = 'PEN' | 'USD';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  currency = signal<Currency>('PEN');
  exchangeRate = signal<number>(3.75);

  constructor() {
    this.fetchRate();
  }

  toggle(c: Currency) {
    this.currency.set(c);
  }

  private async fetchRate() {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await res.json();
      if (data?.rates?.PEN) {
        this.exchangeRate.set(parseFloat(data.rates.PEN.toFixed(2)));
      }
    } catch {
      // usa el valor por defecto 3.75
    }
  }
}