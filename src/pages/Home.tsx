import '../styles/Home.css';
import Hero from '../components/Hero';
import rogLogo from '../assets/images/rog.png';
import redragonLogo from '../assets/images/redragon.png';
import logitechLogo from '../assets/images/logitech.png';
import corsairLogo from '../assets/images/corsair.jpg';

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
    </div>
  );
}

export default Home;
