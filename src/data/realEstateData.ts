import { Property } from '../types';

export const AGENCY_INFO = {
  name: 'EcoApo Propiedades',
  legalName: 'EcoApo Desarrollos Inmobiliarios & Sustentabilidad',
  tagline: 'Bienes Raíces de Alta Gama & Eficiencia Energética',
  phone: '+54 9 11 6138-1530',
  phoneRaw: '+5491161381530',
  email: 'info@ecoapo.com.ar',
  headquarters: [
    {
      title: 'Sede Zona Sur (Banfield)',
      address: 'Maipú 719, Banfield',
      province: 'Provincia de Buenos Aires, Argentina',
      zip: 'B1828',
      role: 'Centro de Operaciones y Ventas Zona Sur'
    },
    {
      title: 'Sede CABA (Parque Patricios)',
      address: 'Luna 24, Parque Patricios',
      province: 'Ciudad Autónoma de Buenos Aires, Argentina',
      zip: 'C1437',
      role: 'Oficinas Corporativas Distrito Tecnológico'
    }
  ],
  hours: 'Lunes a Viernes de 09:00 a 18:00 hs',
  social: {
    instagram: 'https://www.instagram.com/ecoapo_solar/',
    facebook: 'https://www.facebook.com/EcoApoTecnologia',
    youtube: 'https://www.youtube.com/channel/UCq7gEXE6LBdkuNQAfY_WaKQ'
  },
  licenses: {
    caba: 'CUCICBA Mat. 8241',
    provincia: 'CPMCLZ Coleg. 4319'
  }
};

export const HERO_SLIDES = [
  {
    id: 1,
    tagline: 'COLECCIÓN PRIVADA 2026',
    title: 'Propiedades de autor donde conviven el lujo y la sustentabilidad.',
    subtitle: 'Curaduría exclusiva de residencias premium y proyectos con tecnología solar y diseño bioclimático.',
    actionText: 'EXPLORAR PROPIEDADES',
    actionHref: '#propiedades',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    overlayColor: 'from-[#0E0F12]/80 via-[#0E0F12]/40 to-transparent'
  },
  {
    id: 2,
    tagline: 'COBERTURA ESTRATÉGICA',
    title: 'Presencia consolidada en CABA y el corredor selecto de Zona Sur.',
    subtitle: 'Desde residencias en Puerto Madero y Recoleta hasta chalets señoriales en Banfield y chacras en Canning.',
    actionText: 'CONOCER NUESTRAS ZONAS',
    actionHref: '#zonas',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
    overlayColor: 'from-[#0E0F12]/80 via-[#0E0F12]/40 to-transparent'
  },
  {
    id: 3,
    tagline: 'VALORACIÓN TÉCNICA Y REAL',
    title: 'Tasaciones de alta precisión con análisis de plusvalía y eficiencia.',
    subtitle: 'Metodología comparativa de mercado combinada con evaluación de potencial constructivo y calificación energética.',
    actionText: 'SOLICITAR TASACIÓN PROFESIONAL',
    actionHref: '#tasaciones',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85',
    overlayColor: 'from-[#0E0F12]/80 via-[#0E0F12]/40 to-transparent'
  }
];

export const ALTERNATING_SECTIONS = [
  {
    id: 'quienes-somos',
    number: '01',
    pretitle: 'LEGADO & PROPÓSITO',
    title: 'La evolución del corretaje inmobiliario con visión sustentable.',
    subtitle: 'EcoApo nació con la convicción de que la habitabilidad de excelencia debe respetar el entorno.',
    paragraphs: [
      'Entendemos una propiedad no solo como un activo patrimonial de alto valor, sino como un ecosistema vivo. Integramos los más altos estándares del mercado de lujo con criterios rigurosos de eficiencia energética, confort térmico y sostenibilidad.',
      'Nuestra trayectoria en ingeniería energética y presencia territorial tanto en Zona Sur como en CABA nos posiciona de forma única para asesorar a inversores exigentes y familias que buscan calidad de vida insuperable.'
    ],
    actionText: 'CONOCER NUESTRO EQUIPO',
    actionHref: '#contacto',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Interior de residencia de diseño contemporáneo con iluminación natural',
    reverse: false
  },
  {
    id: 'zonas',
    number: '02',
    pretitle: 'ZONA DE COBERTURA',
    title: 'Los enclaves residenciales más codiciados de Buenos Aires.',
    subtitle: 'Especialización geográfica profunda en los micro-mercados más dinámicos y valorizados.',
    paragraphs: [
      'En la Ciudad Autónoma de Buenos Aires, operamos activamente en los corredores de mayor demanda patrimonial: Puerto Madero, Recoleta, Palermo y Belgrano, junto a desarrollos emergentes en el Distrito Tecnológico de Parque Patricios.',
      'En Zona Sur, lideramos la comercialización de residencias históricas y contemporáneas en Banfield Este, Lomas de Zamora (Las Lomitas), Adrogué residencial y los clubes de campo y barrios privados más exclusivos de Canning.'
    ],
    actionText: 'VER CATÁLOGO POR ZONA',
    actionHref: '#propiedades',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Residencia en zona arbolada con piscina y arquitectura premium',
    reverse: true
  },
  {
    id: 'servicios',
    number: '03',
    pretitle: 'SERVICIOS INTEGRALES',
    title: 'Gestión patrimonial personalizada en cada etapa de la operación.',
    subtitle: 'Rigor jurídico, peritaje técnico y discreción absoluta en transacciones de alto perfil.',
    paragraphs: [
      'Comercialización exclusiva: Planes de marketing audiovisual de estándar cinematográfico, campañas dirigidas a compradores calificados y reportes de métricas en tiempo real.',
      'Tasaciones profesionales: Dictamen fidedigno con fundamento econométrico del valor del metro cuadrado, estudio de títulos y diagnóstico de eficiencia constructiva.'
    ],
    actionText: 'SOLICITAR ASESORÍA',
    actionHref: '#tasaciones',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sala de estar de lujo con terminaciones en madera y mármol',
    reverse: false
  }
];

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'prop-1',
    code: 'ECO-1042',
    title: 'Residencia Los Álamos - Banfield Este',
    slug: 'residencia-los-alamos-banfield-este',
    operation: 'Venta',
    type: 'Casa',
    location: {
      neighborhood: 'Banfield Este',
      city: 'Banfield',
      zone: 'Zona Sur',
      addressApprox: 'Cerca de Av. Alsina y Maipú'
    },
    priceUSD: 495000,
    priceFormatted: 'USD 495.000',
    expensesARS: 'Sin expensas',
    coveredAreaM2: 380,
    totalAreaM2: 650,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 2,
    features: [
      'Piscina climatizada con colector solar',
      'Quincho gourmet con cava subterránea',
      'Master suite con vestidor y terraza privada',
      'Carpintería DVH con aislación acústica',
      'Sistema de recolección de agua pluvial'
    ],
    sustainableFeatures: [
      'Paneles solares fotovoltaicos On-Grid',
      'Termotanque solar de alta eficiencia',
      'Iluminación LED domotizada integral'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Imponente propiedad de estilo contemporáneo en la zona más distinguida de Banfield Este. Diseñada con un concepto bio-climático que aprovecha la orientación norte para minimizar consumos energéticos, ofreciendo máxima luminosidad y confort premium en todos sus ambientes.',
    featured: true
  },
  {
    id: 'prop-2',
    code: 'ECO-2088',
    title: 'Piso Exclusivo con Vista al Dique - Puerto Madero',
    slug: 'piso-exclusivo-dique-puerto-madero',
    operation: 'Venta',
    type: 'Penthouse',
    location: {
      neighborhood: 'Puerto Madero',
      city: 'CABA',
      zone: 'CABA',
      addressApprox: 'Dique 3, Puerto Madero'
    },
    priceUSD: 1150000,
    priceFormatted: 'USD 1.150.000',
    expensesARS: '$ 480.000 / mes',
    coveredAreaM2: 260,
    totalAreaM2: 310,
    bedrooms: 3,
    bathrooms: 4,
    parkingSpaces: 2,
    features: [
      'Vistas panorámicas 360° al Río de la Plata y Dique',
      'Palier privado con doble ascensor de alta velocidad',
      'Balcón terraza con cerramiento corredizo premium',
      'Amenities de hotel 5 estrellas (Spa, Gimnasio, Piscina)',
      'Seguridad privada con control biométrico 24hs'
    ],
    sustainableFeatures: [
      'Certificación LEED Gold del edificio',
      'Climatización VRV inteligente de ultra bajo consumo',
      'Gestión centralizada de ahorro energético'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Semipiso de alta gama en una de las torres más prestigiosas de Puerto Madero. Finas terminaciones en mármol de Carrara y maderas nobles. Ambientes de generosas proporciones concebidos para un estilo de vida cosmopolita y sofisticado.',
    featured: true
  },
  {
    id: 'prop-3',
    code: 'ECO-3051',
    title: 'Chalet de Estilo en Las Lomitas - Lomas de Zamora',
    slug: 'chalet-estilo-las-lomitas-lomas-zamora',
    operation: 'Venta',
    type: 'Casa',
    location: {
      neighborhood: 'Las Lomitas',
      city: 'Lomas de Zamora',
      zone: 'Zona Sur',
      addressApprox: 'A pasos de polo gastronómico Las Lomitas'
    },
    priceUSD: 360000,
    priceFormatted: 'USD 360.000',
    expensesARS: 'Sin expensas',
    coveredAreaM2: 290,
    totalAreaM2: 440,
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 2,
    features: [
      'Jardín parquizado con diseño paisajístico',
      'Cocina integrada con isla de cuarzo Silestone',
      'Estudio / Home Office independiente en PB',
      'Calefacción por losa radiante sectorizada',
      'Sistema de alarma y cámaras perimetrales'
    ],
    sustainableFeatures: [
      'Aislación térmica en muros perimetrales',
      'Ventilación cruzada eficiente',
      'Preinstalación para cargador de vehículos eléctricos'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Propiedad única en el corazón de Las Lomitas que combina el encanto residencial tradicional con una renovación integral de vanguardia. Espacios abiertos, luminosidad cenital y detalles constructivos de primer nivel.',
    featured: true
  },
  {
    id: 'prop-4',
    code: 'ECO-4019',
    title: 'Residencia en Barrio Privado La Providencia - Canning',
    slug: 'residencia-barrio-privado-la-providencia-canning',
    operation: 'Venta',
    type: 'Casa',
    location: {
      neighborhood: 'La Providencia Resort & Polo',
      city: 'Canning',
      zone: 'Zona Sur',
      addressApprox: 'Sector Polo & Golf, Canning'
    },
    priceUSD: 620000,
    priceFormatted: 'USD 620.000',
    expensesARS: '$ 320.000 / mes',
    coveredAreaM2: 420,
    totalAreaM2: 1250,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 3,
    features: [
      'Fondo libre a laguna privada y cancha de polo',
      'Piscina sinfín con desborde en venecita oscura',
      'Galería cubierta de 70m² con parrilla y horno a leña',
      'Suites con vestidores de roble natural',
      'Grupo electrógeno automático a gas'
    ],
    sustainableFeatures: [
      'Micro-red solar con acumulación en baterías de litio',
      'Riego por goteo computarizado con pozo de agua propio',
      'Vidriado doble bajo emisivo (Low-E)'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Vivir en contacto pleno con la naturaleza con el más alto estándar de seguridad y confort. Esta residencia en Canning cuenta con diseño arquitectónico en una planta y entrepiso, materiales puros (hormigón visto, madera y piedra) y vistas infinitas al lago.',
    featured: true
  },
  {
    id: 'prop-5',
    code: 'ECO-5072',
    title: 'Semipiso de Estilo Francés Reciclado - Recoleta',
    slug: 'semipiso-frances-reciclado-recoleta',
    operation: 'Alquiler',
    type: 'Departamento',
    location: {
      neighborhood: 'Recoleta',
      city: 'CABA',
      zone: 'CABA',
      addressApprox: 'Av. Alvear y Ayacucho'
    },
    priceUSD: 2800,
    priceFormatted: 'USD 2.800 / mes',
    expensesARS: '$ 290.000 / mes',
    coveredAreaM2: 210,
    totalAreaM2: 225,
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 1,
    features: [
      'Techos de 3.60m de altura con molduras originales restauradas',
      'Pisos de roble de Eslavonia pulidos e hidrolaqueados',
      'Cocina de diseño escandinavo con electrodomésticos empotrados',
      'Balcón corrido al frente sobre calle arbolada',
      'Calefacción central por radiadores de fundición'
    ],
    sustainableFeatures: [
      'Restauración sustentable con materiales reciclados nobles',
      'Termocúpula doble en aberturas históricas'
    ],
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'La elegancia clásica de Recoleta en su máxima expresión. Piso totalmente reciclado por prestigioso estudio de arquitectura. Combina el encanto de la Belle Époque porteña con el confort tecnológico contemporáneo.',
    featured: false
  },
  {
    id: 'prop-6',
    code: 'ECO-6033',
    title: 'Edificio EcoTech Parque Patricios - Distrito Tecnológico',
    slug: 'edificio-ecotech-parque-patricios-distrito-tecnologico',
    operation: 'Emprendimiento',
    type: 'Departamento',
    location: {
      neighborhood: 'Parque Patricios',
      city: 'CABA',
      zone: 'CABA',
      addressApprox: 'Próximo a Sede Corporativa Luna 24'
    },
    priceUSD: 142000,
    priceFormatted: 'Desde USD 142.000',
    expensesARS: 'A definir en entrega',
    coveredAreaM2: 65,
    totalAreaM2: 78,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    features: [
      'Unidades de 1, 2 y 3 ambientes con balcón terraza',
      'Rooftop con piscina, coworking y huerta orgánica comunitaria',
      'Bajas expensas gracias a autogeneración energética solar',
      'Cocheras subterráneas con estaciones de recarga EV',
      'Beneficios impositivos por Distrito Tecnológico'
    ],
    sustainableFeatures: [
      'Matriz solar fotovoltaica en terraza para áreas comunes',
      'Fachada verde con aislación acústica y térmica',
      'Recuperación de aguas grises para riego'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Nuevo desarrollo sustentable en pozo impulsado en conjunto con la experiencia energética de EcoApo. Diseñado para jóvenes profesionales, empresas tecnológicas e inversores que buscan rentabilidad comprobada y expensas mínimas.',
    featured: true
  },
  {
    id: 'prop-7',
    code: 'ECO-7014',
    title: 'Torre Palermo Soho Green Living',
    slug: 'torre-palermo-soho-green-living',
    operation: 'Alquiler',
    type: 'Departamento',
    location: {
      neighborhood: 'Palermo Soho',
      city: 'CABA',
      zone: 'CABA',
      addressApprox: 'Honduras y Thames'
    },
    priceUSD: 1950,
    priceFormatted: 'USD 1.950 / mes',
    expensesARS: '$ 180.000 / mes',
    coveredAreaM2: 110,
    totalAreaM2: 128,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    features: [
      'Totalmente amoblado con mobiliario de autor',
      'Balcón aterrazado con parrilla propia a gas',
      'Gimnasio de última generación y solarium',
      'Laundry y espacio de baulera privada',
      'Cerradura inteligente con clave y huella'
    ],
    sustainableFeatures: [
      'Aberturas de aluminio RPT (Ruptura de Puente Térmico)',
      'Termos solares para agua caliente sanitaria'
    ],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Departamento premium en alquiler temporal o tradicional en el corazón vibrante de Palermo Soho. Luminosidad excepcional en piso alto, decoración cuidada y bajas expensas energéticas.',
    featured: false
  },
  {
    id: 'prop-8',
    code: 'ECO-8095',
    title: 'Mansión Señorial en Belgrano R',
    slug: 'mansion-senorial-belgrano-r',
    operation: 'Venta',
    type: 'Casa',
    location: {
      neighborhood: 'Belgrano R',
      city: 'CABA',
      zone: 'CABA',
      addressApprox: 'Av. Melián y La Pampa'
    },
    priceUSD: 1480000,
    priceFormatted: 'USD 1.480.000',
    expensesARS: 'Sin expensas',
    coveredAreaM2: 540,
    totalAreaM2: 890,
    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 4,
    features: [
      'Parque arbolado centenario con piscina climatizada',
      'Bodega climatizada para 800 botellas',
      'Sector de huéspedes independiente con kitchenette',
      'Garaje cerrado para 4 vehículos',
      'Casilla de seguridad blindada en acceso'
    ],
    sustainableFeatures: [
      'Sistema solar híbrido con almacenamiento de emergencia',
      'Tratamiento térmico de techos y muros con cámara de aire'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Una de las residencias más exclusivas del señorial barrio de Belgrano R. Diseñada para quienes valoran la privacidad, el patrimonio arquitectónico y los espacios verdes generosos en plena ciudad capital.',
    featured: false
  }
];
