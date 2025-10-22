import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import banner1 from '../assets/images/banner-1.jpg';
import banner2 from '../assets/images/banner-2.jpg';
import banner3 from '../assets/images/banner-3.jpg';

function Hero() {
  return (
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
              <Link to="/comprar" className="btn btn-shop-custom">
                A COMPRAR
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
              <Link to="/comprar" className="btn btn-shop-custom">
                A COMPRAR
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
              <Link to="/comprar" className="btn btn-shop-custom">
                A COMPRAR
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;
