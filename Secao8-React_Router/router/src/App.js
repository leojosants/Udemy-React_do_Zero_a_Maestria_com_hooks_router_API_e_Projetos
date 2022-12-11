// CSS
import './App.css';

// 1 - Config react router
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Info from './pages/Info/Info';
import NotFoud from './pages/NotFoud/NotFoud';
import Search from './pages/Search/Search';

// Components
import Navbar from './components/NavbarComponent/Navbar';
import SearchForm from './components/SearchForm/SearchForm';

function App() {

  return (

    <div className="App">

      <h1>React Router</h1>

      <BrowserRouter>
        
        {/* 2 - Links com react router */}
        <Navbar />

        {/* 9 - Search */}
        <SearchForm />
        
        <Routes>

          <Route path='/' element={<Home />} />
        
          <Route path='/about' element={<About />} />
        
          {/* 6 - Nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          
          {/* 4 - Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          
          {/* 9 - Search */}
          <Route path='/search' element={<Search />} />
          
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to={'/about'} />} />

          {/* 7 - No match route */}
          <Route path='*' element={<NotFoud />} />

        </Routes>

      </BrowserRouter>

    </div>

  );

};

export default App;