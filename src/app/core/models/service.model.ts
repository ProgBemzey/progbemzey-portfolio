export interface Service {
    id: string;
    titleKey: string;
    descKey: string;
    icon: string;
    pricePen: string;
    priceUsd: string;
    priceType: 'from' | 'monthly';
}