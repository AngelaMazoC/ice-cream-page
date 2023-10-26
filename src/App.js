// Importar los componentes y css que se van a utilizar
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Promotion from './Components/Promotion';
import Products from './Components/Products';
import Footer from './Components/Footer';

// Llamamos el css de la pagina
import './App.css';


function App() {
  return (
    <div className="App">
      {/* Llamar a los componentes que se van a renderizar en la pagina */}
      <Navbar/>
      <Home/>
      <About/>
      <Promotion/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
