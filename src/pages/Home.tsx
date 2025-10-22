import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';
import rogLogo from '../assets/rog.png';
import redragonLogo from '../assets/redragon.png';
import logitechLogo from '../assets/logitech.png';
import corsairLogo from '../assets/corsair.jpg';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section - Carousel */}
      <section className="hero-section">
        <Carousel fade interval={4000} pause="hover">
          {/* Banner 1 */}
          <Carousel.Item>
            <div className="carousel-image-container">
              <img
                className="d-block w-100 carousel-image"
                src={banner1}
                alt="Banner 1"
              />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="custom-caption">
              <h1 className="hero-title animate-fade-in">LEVEL UP TU EXPERIENCIA</h1>
              <p className="hero-subtitle animate-fade-in-delay">
                Los mejores productos gaming seleccionados por expertos
              </p>
              <div className="hero-buttons animate-fade-in-delay-2">
                <Link to="/productos" className="btn btn-primary-custom me-3">
                  Ver Productos
                </Link>
                <Link to="/ofertas" className="btn btn-secondary-custom">
                  Ver Ofertas 🔥
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Banner 2 */}
          <Carousel.Item>
            <div className="carousel-image-container">
              <img
                className="d-block w-100 carousel-image"
                src={banner2}
                alt="Banner 2"
              />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="custom-caption">
              <h1 className="hero-title animate-fade-in">EQUÍPATE COMO UN PRO</h1>
              <p className="hero-subtitle animate-fade-in-delay">
                Periféricos de alta calidad para gamers exigentes
              </p>
              <div className="hero-buttons animate-fade-in-delay-2">
                <Link to="/categorias" className="btn btn-primary-custom me-3">
                  Explorar Categorías
                </Link>
                <Link to="/nosotros" className="btn btn-secondary-custom">
                  Conoce Más
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Banner 3 */}
          <Carousel.Item>
            <div className="carousel-image-container">
              <img
                className="d-block w-100 carousel-image"
                src={banner3}
                alt="Banner 3"
              />
              <div className="carousel-overlay"></div>
            </div>
            <Carousel.Caption className="custom-caption">
              <h1 className="hero-title animate-fade-in">OFERTAS INCREÍBLES</h1>
              <p className="hero-subtitle animate-fade-in-delay">
                Descuentos exclusivos en tu arsenal gamer favorito
              </p>
              <div className="hero-buttons animate-fade-in-delay-2">
                <Link to="/ofertas" className="btn btn-primary-custom me-3">
                  Ver Ofertas
                </Link>
                <Link to="/contacto" className="btn btn-secondary-custom">
                  Contáctanos
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

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
    </div>
  );
}

export default Home;
