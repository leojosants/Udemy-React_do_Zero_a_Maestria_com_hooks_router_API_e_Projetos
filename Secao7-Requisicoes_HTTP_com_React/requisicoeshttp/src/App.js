// Style
import './App.css';

// Hoocks
import { useState } from 'react'

// 4 - Custom hook
import { useFetch } from './hooks/UseFetch/useFetch';

const url = 'http://localhost:3000/products';

function App() {

  // const [products, setProducts] = useState([]);

  // 4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);
  // console.log(data);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // 2 - Adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,  
      price,  
    };
    
    // 5 - Refatorando POST
    httpConfig(product, 'POST');

    setName('');
    setPrice('');

  };

  // 8 - Desafio 6
  const handleRemove = (id) => {
    
    httpConfig(id, 'DELETE');

  };

  return (

    <div className="App">
    
      <h1>Lista de Produtos</h1>

      {/* 6 - Loading */}
      {loading && <p>Carregando dados...</p>}
      
      {error && <p>{error}</p>}
            
      {!error && (
              <ul>
              {items && items.map((product) => (
                <li key={product.id}>
                  {product.name} -
                  R$: {product.price}

                  <button onClick={() => handleRemove(product.id)}>Excluir</button>
                </li>
              ))}
            </ul>
      ) }

      <div className='add_product'>
        <form onSubmit={handleSubmit}>

          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* 7 - State de loading no post */}
          
          
          { loading &&
            <input
              type="submit"
              disabled
              value='Aguarde'
            />
          }

          { !loading &&
            <input
              type="submit"
              value='Criar'
            />
          }

        </form>

      </div>

    </div>
  );
};

export default App;
