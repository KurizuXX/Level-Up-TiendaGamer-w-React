import { Link } from 'react-router-dom';
import type { Category } from '../types';

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ARREGLAR ESTE ARCHIVO/COMPONENTE
// ------------------------------------------------------------------
// ------------------------------------------------------------------

export default function CategoryCard({ c }: { c: Category }){
return (
<div className="col">
    <div className="card h-100 text-center">
    <div className="card-body d-flex flex-column justify-content-center">
        <h4 className="neon-text mb-3">{c.name}</h4>
        <Link to={`/categorias/${c.id}`} className="btn btn-neon">Ver {c.name}</Link>
    </div>
    </div>
</div>
);
}