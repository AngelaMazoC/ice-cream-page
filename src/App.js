import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Promotion from './Components/Promotion';
import Products from './Components/Products';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
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
