export type CategoryId =
  | 'consolas'
  | 'pc'
  | 'accesorios'
  | 'juegos'
  | 'computadores'
  | 'sillas'
  | 'mouse'
  | 'mousepad'
  | 'poleras'
  | 'polerones';

export interface Category {
  id: CategoryId
  name: string
}

export interface Product {
  id: number
  name: string,
  price: number,
  category: CategoryId
  img: string
  desc: string
  featured?: boolean
  discount?: number // 0-1
}

export interface CartItem {
  id: number // product id
  name: string
  price: number
  discount: number // 0-1
  qty: number
  img: string
}

export interface User { 
  email: string
  password: string
}

export interface Session { 
  email: string
}

export interface ContactMessage {
  nombre: string
  email: string
  mensaje: string
  date: string // ISO
}