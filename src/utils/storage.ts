import type { CartItem, ContactMessage, Session, User } from '../types';

export const STORAGE_KEYS = {
  USERS: 'lug_users',
  SESSION: 'lug_session',
  CART: 'lug_cart',
  CONTACT: 'lug_contact_messages'
} as const;

export function getStored<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch {
    return fallback;
  }
}

export function setStored<T>(key: string, value: T){
  localStorage.setItem(key, JSON.stringify(value));
}

export function clearSession(){
  localStorage.removeItem(STORAGE_KEYS.SESSION);
}

export const Storage = {
  users: () => getStored<User[]>(STORAGE_KEYS.USERS, []),
  saveUsers: (u: User[]) => setStored(STORAGE_KEYS.USERS, u),
  session: () => getStored<Session | null>(STORAGE_KEYS.SESSION, null),
  saveSession: (s: Session | null) => s ? setStored(STORAGE_KEYS.SESSION, s) : clearSession(),
  cart: () => getStored<CartItem[]>(STORAGE_KEYS.CART, []),
  saveCart: (c: CartItem[]) => setStored(STORAGE_KEYS.CART, c),
  contact: () => getStored<ContactMessage[]>(STORAGE_KEYS.CONTACT, []),
  saveContact: (m: ContactMessage[]) => setStored(STORAGE_KEYS.CONTACT, m),
};