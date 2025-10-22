import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Categories from '../pages/Categories';
import CategoryDetail from '../pages/CategoryDetail';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';
import Blogs from '../pages/Blogs';
import BlogDetail1 from '../pages/BlogDetail1';
import BlogDetail2 from '../pages/BlogDetail2';
import Login from '../pages/Login';
import PagoCorrecto from '../pages/PagoCorrecto';
import PagoError from '../pages/PagoError';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="nosotros" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contacto" element={<Contact />} />
        
        {/* Categorías */}
        <Route path="categorias" element={<Categories />} />
        <Route path="categorias/:id" element={<CategoryDetail />} />
        
        {/* Productos */}
  <Route path="productos" element={<Products />} />
        <Route path="productos/:id" element={<ProductDetail />} />
        
        {/* Ofertas */}
  {/* rutas de ofertas removidas por falta de página */}
        
        {/* Comprar */}
        <Route path="pago-correcto" element={<PagoCorrecto />} />
        <Route path="pago-error" element={<PagoError />} />
        
        {/* Blogs */}
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/1" element={<BlogDetail1 />} />
        <Route path="blogs/2" element={<BlogDetail2 />} />
        
        {/* Autenticación */}
        <Route path="iniciar-sesion" element={<Login />} />
        <Route path="login" element={<Login />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
