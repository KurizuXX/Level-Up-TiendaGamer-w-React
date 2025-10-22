import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import '../styles/ProductCard.css';

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ARREGLAR ESTE ARCHIVO/COMPONENTE
// ------------------------------------------------------------------
// ------------------------------------------------------------------

interface ProductCardProps {
	// Mantiene compatibilidad con las páginas actuales
	p: Product;
	className?: string;
	children?: ReactNode; // Permite inyectar acciones extra
	onAddToCart?: (product: Product) => void;
}

/**
 * ProductCard
 * Muestra la tarjeta de producto con imagen, nombre, descripción y precio.
 * - Tipado con ProductCardProps
 * - Soporta children para acciones adicionales
 * - Conserva el prop "p" para no romper usos existentes
 */
function ProductCard({
	p,
	className = '',
	children,
	onAddToCart,
}: ProductCardProps) {

	const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onAddToCart?.(p);
	};

	return (
		<div className={`col ${className}`}>
			<div className="card h-100 position-relative product-card">
				{/* Badge de descuento removido por solicitud */}

				{/* Imagen */}
				<Link to={`/productos/${p.id}`} className="text-decoration-none">
					<img
						src={p.img}
						className="card-img-top product-img"
						alt={p.name}
						loading="lazy"
						onError={(e) => {
							e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Imagen+no+disponible';
						}}
					/>
				</Link>

				{/* Contenido */}
				<div className="card-body d-flex flex-column">
					<h5 className="card-title neon-text mb-2 product-title">{p.name}</h5>
					<p className="card-text small text-secondary flex-grow-1">{p.desc}</p>

					{/* Precio */}
					<div className="mb-3">
						<strong>${p.price.toLocaleString('es-CL')}</strong>
					</div>

					{/* Acciones */}
					<div className="d-flex gap-2 mt-auto">
						<Link to={`/productos/${p.id}`} className="btn btn-sm btn-outline-info flex-grow-1">
							Ver detalle
						</Link>
						{onAddToCart && (
							<button className="btn btn-sm btn-success" onClick={handleAdd} title="Agregar al carrito">
								<i className="bi bi-cart-plus" />
							</button>
						)}
						{/* Espacio para children opcionales (por ejemplo, un botón favorito) */}
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;

