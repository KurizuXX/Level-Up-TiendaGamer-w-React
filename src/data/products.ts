import type { Category, Product, CategoryId } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'consolas', name: 'Consolas' },
  { id: 'pc', name: 'PC Gaming' },
  { id: 'accesorios', name: 'Accesorios' },
  { id: 'juegos', name: 'Juegos' }
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Control Pro Neo', price: 59990, category: 'accesorios', img: 'https://picsum.photos/seed/neo/600/400', desc: 'Control inalámbrico RGB para sesiones pro.', featured: true, discount: 0.15 },
  { id: 2, name: 'Auriculares Flux 7.1', price: 42990, category: 'accesorios', img: 'https://picsum.photos/seed/flux/600/400', desc: 'Sonido envolvente y micrófono retráctil.', featured: true },
  { id: 3, name: 'RTX 5090 (Ficticia)', price: 1299990, category: 'pc', img: 'https://picsum.photos/seed/rtx/600/400', desc: 'Tarjeta gráfica para rendimiento extremo.', discount: 0.10 },
  { id: 4, name: 'Consola Omega X', price: 499990, category: 'consolas', img: 'https://picsum.photos/seed/omega/600/400', desc: 'Nueva generación con ray tracing.', featured: true, discount: 0.20 },
  { id: 5, name: 'Teclado Mecánico Void', price: 69990, category: 'accesorios', img: 'https://picsum.photos/seed/void/600/400', desc: 'Switches táctiles y luz neón.' },
  { id: 6, name: 'Mouse Spectra', price: 34990, category: 'accesorios', img: 'https://picsum.photos/seed/spectra/600/400', desc: '8000 DPI con iluminación.', discount: 0.25 },
  { id: 7, name: 'Game: CyberRift', price: 29990, category: 'juegos', img: 'https://picsum.photos/seed/cyber/600/400', desc: 'Aventura sci-fi de mundo abierto.' },
  { id: 8, name: 'Game: NeoRacer', price: 25990, category: 'juegos', img: 'https://picsum.photos/seed/neoracer/600/400', desc: 'Carreras arcade con drift luminoso.' }
];

export function getById(id: string | number){
  return PRODUCTS.find(p => p.id === Number(id));
}

export function getByCategory(catId: CategoryId){
  return PRODUCTS.filter(p => p.category === catId);
}

export function getOffers(){
  return PRODUCTS.filter(p => p.discount && p.discount > 0);
}

export function getFeatured(){
  return PRODUCTS.filter(p => p.featured);
}