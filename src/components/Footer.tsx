import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Level-Up Gamer. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
