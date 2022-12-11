// 2 - Links com react router

// CSS
import './Navbar.css';

// Routers
import { NavLink } from 'react-router-dom';

// rafce 
const Navbar = () => {

    return (

        <nav>

            {/* LINK será substituído por NAVLINK
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link> 
            */}

            <NavLink
                to="/"
                // className={({ isActive }) => (isActive ? 'esta_ativo' : 'nao_ativo')}
            >
                Home
            </NavLink>
  
            <NavLink to="/about">Sobre</NavLink> 
            
        </nav>

    );

};

export default Navbar;