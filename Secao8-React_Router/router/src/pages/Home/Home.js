// Routers
import { Link } from "react-router-dom";

// Hooks Custom
import { useFetch } from '../../hooks/UseFetch/useFetch';

// CSS
import './Home.css';

// rafce
const Home = () => {

    // 3 - Carregamento dde dados
    const url = 'http://localhost:3000/products';

    const { data: items, error } = useFetch(url);

    return (

        <div>

            <h1>Produtos</h1>

            {error && <p>{error}</p>}
            
            <ul className="products">

                {items && items.map(item => (
                    
                    <li key={item.id}>

                        <h2>{item.name }</h2>

                        <p>R$ {item.price}</p>

                        {/* 4 - Rota dinâmica */}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                        
                    </li>
                )) }
                
            </ul>

        </div>

    );

};

export default Home;