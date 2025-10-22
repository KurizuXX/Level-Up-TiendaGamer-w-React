import { useMemo, useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import type { CategoryId, Product } from '../types';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

export default function Products() {
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');

  const filtered = useMemo(() => {
    const t = term.trim().toLowerCase();
    let list: Product[] = PRODUCTS;
    if (category !== 'all') {
      list = list.filter(p => p.category === category);
    }
    if (t) {
      list = list.filter(p => p.name.toLowerCase().includes(t) || p.desc.toLowerCase().includes(t));
    }
    return list;
  }, [term, category]);

  return (
    <div className="products-page py-4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <h2 className="section-title m-0">Productos</h2>
          <div className="d-flex gap-2 filter-bar">
            <input
              className="form-control"
              placeholder="Buscar productos..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value as CategoryId | 'all')}
            >
              <option value="all">Todas las categorías</option>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-muted small mb-3 fade-in">{filtered.length} resultados</p>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 reveal-grid">
          {filtered.map((p, idx) => (
            <div className="reveal" style={{ animationDelay: `${(idx % 9) * 60}ms` }} key={p.id}>
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
