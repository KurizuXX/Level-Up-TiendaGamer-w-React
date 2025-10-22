// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ARREGLAR ESTE ARCHIVO/COMPONENTE
// ------------------------------------------------------------------
// ------------------------------------------------------------------

import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-1">404</h1>
      <h2>Página no encontrada</h2>
      <p className="mb-4">La página que buscas no existe.</p>
      <Link to="/">
        <Button variant="primary">Volver al inicio</Button>
      </Link>
    </Container>
  );
}

export default NotFound;
