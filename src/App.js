
import './App.css';
import CardHorizontal from './components/CardHorizontal';
import CardHorizontal2 from './components/CardHorizontal';
import Cards from './components/Cards';
import CardsBorder from './components/CardsBorder';
import Cuadritos from './components/Cuadritos';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <CardHorizontal />
      <CardsBorder />
      <CardHorizontal2 />
      <Cuadritos />
      <Footer />

    </>
  );
}

export default App;
