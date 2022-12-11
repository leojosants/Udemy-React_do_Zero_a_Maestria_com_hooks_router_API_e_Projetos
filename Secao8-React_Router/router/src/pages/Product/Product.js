// CSS
import './Product.css';

// Hook
import { useParams, Link } from 'react-router-dom';

// Hook custom
import { useFetch } from '../../hooks/UseFetch/useFetch';

// rafce
const Product = () => {
  
    // 4 - Rota dinâmica
    const { id } = useParams();

    // 5 - Carregamento de dado individual
    const url = 'http://localhost:3000/products/' + id;

    const {data: product, loading, error} = useFetch(url);

    console.log(product);

    return (
  
        <>
            <p>ID do produto: {id}</p>

            {error && <p>Ocorreu um erro...</p>}

            {loading && <p>Carregando...</p>}

            {product && (
                
                <div>

                    <h1>{product.name}</h1>
                    
                    <p>R$ {product.price}</p>
                    
                    {/* 6 - Nested routes */}
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>

                </div>
            )}
            
        </>
  
    );

};

export default Product;