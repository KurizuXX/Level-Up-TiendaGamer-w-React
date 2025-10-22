import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import amexImg from '../assets/images/amex.png';
import dinersImg from '../assets/images/diners-club.png';
import mastercardImg from '../assets/images/mastercard.png';
import visaImg from '../assets/images/visa.png';

function Footer() {
  return (
    <footer className="custom-footer">
      <Container>
        <Row className="py-5">
          {/* Logo Section */}
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-logo">
              <h2 className="logo-text">LEVEL-UP</h2>
            </div>
            <div className="payment-methods mt-4">
              <img src={amexImg} alt="American Express" className="payment-icon" />
              <img src={dinersImg} alt="Diners Club" className="payment-icon" />
              <img src={mastercardImg} alt="Mastercard" className="payment-icon" />
              <img src={visaImg} alt="Visa" className="payment-icon" />
            </div>
          </Col>

          {/* NOSOTROS Section */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">NOSOTROS</h5>
            <ul className="footer-links">
              <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </Col>

          {/* Quick Links Section */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">Quick links</h5>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/categorias">Marcas</Link></li>
              <li><Link to="/ofertas">Más Vendidos</Link></li>
            </ul>
          </Col>

          {/* CONTACTO Section */}
          <Col lg={3} md={6} className="mb-4">
            <h5 className="footer-title">CONTACTO</h5>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:contacto@levelup.cl">contacto@levelup.cl</a>
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+56955979994">+569 5597 9994</a>
              </li>
            </ul>
            <p className="footer-description mt-3">
              El arsenal de los gamers más exigentes de Chile, <strong>seleccionado por expertos</strong>
            </p>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="footer-bottom py-3">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()}, Level-Up</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Link to="/politica-privacidad" className="footer-bottom-link">Política de privacidad</Link>
            <span className="mx-2">|</span>
            <Link to="/politica-reembolso" className="footer-bottom-link">Política de reembolso</Link>
            <span className="mx-2">|</span>
            <Link to="/politica-envio" className="footer-bottom-link">Política de envío</Link>
            <span className="mx-2">|</span>
            <Link to="/terminos-servicio" className="footer-bottom-link">Términos del servicio</Link>
            <span className="mx-2">|</span>
            <Link to="/contacto" className="footer-bottom-link">Información de contacto</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
