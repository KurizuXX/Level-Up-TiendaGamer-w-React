import '../styles/Home.css';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import rogLogo from '../assets/images/rog.png';
import redragonLogo from '../assets/images/redragon.png';
import logitechLogo from '../assets/images/logitech.png';
import corsairLogo from '../assets/images/corsair.jpg';
import categoryImg1 from '../assets/images/no-bg.jpg';
import categoryImg2 from '../assets/images/no-bg-2.jpg';
import categoryImg3 from '../assets/images/no-bg-3.jpg';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section - Carousel */}
      <Hero />

      {/* Brands Section - Animated Slider */}
      <section className="brands-section">
        <div className="brands-slider">
          <div className="brands-track">
            <div className="brand-item">
              <img src={rogLogo} alt="ROG" />
            </div>
            <div className="brand-item">
              <img src={redragonLogo} alt="Redragon" />
            </div>
            <div className="brand-item">
              <img src={logitechLogo} alt="Logitech" />
            </div>
            <div className="brand-item">
              <img src={corsairLogo} alt="Corsair" />
            </div>
            {/* Duplicar para efecto infinito */}
            <div className="brand-item">
              <img src={rogLogo} alt="ROG" />
            </div>
            <div className="brand-item">
              <img src={redragonLogo} alt="Redragon" />
            </div>
            <div className="brand-item">
              <img src={logitechLogo} alt="Logitech" />
            </div>
            <div className="brand-item">
              <img src={corsairLogo} alt="Corsair" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="featured-categories-section">
        <div className="container">
          <h2 className="section-title">CATEGORÍAS DESTACADAS</h2>
          
          <div className="categories-grid">
            {/* Teclados - Grande vertical izquierda */}
            <Link to="/categorias/teclados" className="category-card category-large">
              <div className="category-label">
                <h3>TECLADOS</h3>
              </div>
              <div className="category-image">
                <img src={categoryImg1} alt="Teclados" />
              </div>
            </Link>

            {/* Mouses - Arriba derecha */}
            <Link to="/categorias/mouse" className="category-card category-medium-top">
              <div className="category-label">
                <h3>MOUSES</h3>
              </div>
              <div className="category-image">
                <img src={categoryImg2} alt="Mouses" />
              </div>
            </Link>

            {/* Audífonos - Arriba extremo derecho */}
            <Link to="/categorias/audifonos" className="category-card category-medium">
              <div className="category-label">
                <h3>AUDÍFONOS</h3>
              </div>
              <div className="category-image">
                <img src={categoryImg3} alt="Audífonos" />
              </div>
            </Link>

            {/* Mousepads - Abajo derecha */}
            <Link to="/categorias/mousepads" className="category-card category-small">
              <div className="category-label">
                <h3>MOUSEPADS</h3>
              </div>
              <div className="category-image">
                <img src={categoryImg2} alt="Mousepads" />
              </div>
            </Link>

            {/* Skates - Abajo extremo derecho */}
            <Link to="/categorias/skates" className="category-card category-medium-bottom">
              <div className="category-label">
                <h3>SKATES</h3>
              </div>
              <div className="category-image">
                <img src={categoryImg1} alt="Skates" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="home-products-section py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="section-title m-0">PRODUCTOS</h2>
            <Link to="/productos" className="btn btn-sm btn-outline-info">Ver todos</Link>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {PRODUCTS.slice(0, 3).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
