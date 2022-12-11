// CSS
import './App.css';

// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Firebase
import { onAuthStateChanged } from 'firebase/auth';

// Hooks
import { useState, useEffect } from 'react';

// Hook custom
import { useAuthentication } from './hooks/useAthentication/useAthentication';

// Context
import { AuthProvider } from './context/AuthContext/AuthContext';

// Components
import Navbar from './components/NavbarComponent/Navbar';
import Footer from './components/FooterComponet/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const loadingUser = user === undefined;

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (

    <div
      className="App"
    >

      <AuthProvider
        value={{ user }}
      >

        <BrowserRouter>

          <Navbar />

          <div
            className="container"
          >

            <Routes>

              <Route
                path='/'
                element={<Home />}
              />
              
              <Route 
                path='/about' 
                element={<About />}
              />
             
              <Route 
                path='/search' 
                element={<Search />}
              />
              
              <Route 
                path='/posts/:id' 
                element={<Post />}
              />
              
              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/' />}
              />
              
              <Route
                path='/register'
                element={!user ? <Register /> : <Navigate to='/' />}
              />

              <Route
                path='/posts/edit/:id'
                element={user ? <EditPost /> : <Navigate to='/login' />}
              />
              
              <Route
                path='/posts/create'
                element={user ? <CreatePost /> : <Navigate to='/login' />}
              />
              
              <Route
                path='/dashboard'
                element={user ? <Dashboard /> : <Navigate to='/login' />}
              />

            </Routes>

          </div>

          <Footer />

        </BrowserRouter>

      </AuthProvider>

    </div>

  );

};

export default App;