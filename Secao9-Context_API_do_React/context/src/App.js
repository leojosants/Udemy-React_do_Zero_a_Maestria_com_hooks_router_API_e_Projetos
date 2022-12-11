// CSS
import './App.css';

// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';

// Components
import Navbar from './components/NavbarComponent/Navbar';

function App() {

  return (

    <div className="App">

      <h1>Context</h1>

      <BrowserRouter>

        <Navbar />
        
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/products' element={<Products />} />

          <Route path='/about' element={<About />} />
        
        </Routes>

      </BrowserRouter>

    </div>

  );

};

export default App;
