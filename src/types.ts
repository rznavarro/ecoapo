export type OperationType = 'Venta' | 'Alquiler' | 'Emprendimiento';

export type PropertyType = 'Departamento' | 'Casa' | 'Penthouse' | 'Terreno' | 'Oficina';

export interface Property {
  id: string;
  code: string;
  title: string;
  slug: string;
  operation: OperationType;
  type: PropertyType;
  location: {
    neighborhood: string;
    city: string;
    zone: 'CABA' | 'Zona Sur' | 'GBA';
    addressApprox: string;
  };
  priceUSD: number;
  priceFormatted: string;
  expensesARS?: string;
  coveredAreaM2: number;
  totalAreaM2: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  features: string[];
  sustainableFeatures: string[];
  images: string[];
  description: string;
  featured?: boolean;
}

export interface FilterState {
  operation: string;
  type: string;
  location: string;
  maxPrice: number;
  searchTerm: string;
}

export interface ValuationForm {
  propertyType: string;
  operation: string;
  zone: string;
  coveredArea: string;
  rooms: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}
