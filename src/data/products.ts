import type { Category, Product, CategoryId } from '../types';

export const CATEGORIES: Category[] = [
    {id:'juegos', name:'Juegos de Mesa'},
    {id:'accesorios', name:'Accesorios'},
    {id:'consolas', name:'Consolas'},
    {id:'computadores', name:'PC Gamers'},
    {id:'sillas', name:'Sillas Gamer'},
    {id:'mouse', name:'Mouse'},
    {id:'mousepad', name:'Mousepad'},
    {id:'poleras', name:'Poleras Personalizadas'},
    {id:'polerones', name:'Polerones Gamers Personalizados'}
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Catan',
        price: 29990,
        category: 'juegos',
        img: 'assets/images/producto catan.jpg',
        desc: 'Clásico de estrategia para 3-4 jugadores.'
    },
    {
        id: 2,
        name: 'Carcassonne',
        price: 24990,
        category: 'juegos',
        img: 'assets/images/producto carcassonne.jpg',
        desc: 'Colocación de losetas. 2-5 jugadores.'
    },
    {
        id: 3,
        name: 'Control Xbox Series X',
        price: 59990,
        category: 'accesorios',
        img: 'assets/images/producto controlxbox.jpg',
        desc: 'Ergonomía y botones mapeables.'
    },
    {
        id: 4,
        name: 'HyperX Cloud II',
        price: 79990,
        category: 'accesorios',
        img: 'assets/images/producto hyperx cloud 2.jpg',
        desc: 'Sonido envolvente con micrófono desmontable.'
    },
    {
        id: 5,
        name: 'PlayStation 5',
        price: 549990,
        category: 'consolas',
        img: 'assets/images/producto playstation 5.png',
        desc: 'Nueva generación de Sony.'
    },
    {
        id: 6,
        name: 'PC Gamer ASUS ROG Strix',
        price: 1299990,
        category: 'pc', 
        img: 'assets/images/producto pc gamer asus.jpg',
        desc: 'Rendimiento alto para juegos exigentes.'
    },
    {
        id: 7,
        name: 'Secretlab Titan',
        price: 349990,
        category: 'sillas',
        img: 'assets/images/producto secretlab titan.jpg',
        desc: 'Soporte ergonómico y ajustes finos.'
    },
    {
        id: 8,
        name: 'Logitech G502 HERO',
        price: 49990,
        category: 'mouse',
        img: 'assets/images/producto logitech g502 hero.jpg',
        desc: 'Sensor de alta precisión y botones programables.'
    },
    {
        id: 9,
        name: 'Razer Goliathus Extended Chroma',
        price: 29990,
        category: 'mousepad',
        img: 'assets/images/producto mousepad razer goliathus.jpg',
        desc: 'Superficie amplia con RGB.'
    },
    {
        id: 10,
        name: 'Polera Level-Up Personalizada',
        price: 14990,
        category: 'poleras',
        img: 'assets/images/producto polera.png',
        desc: 'Personaliza con tu gamer tag.'
    }
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