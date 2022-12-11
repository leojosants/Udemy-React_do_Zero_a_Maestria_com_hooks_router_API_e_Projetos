// CSS
import './Products.css';

// Hook custom
import useCounterContext from '../../hooks/useCounterContext/useCounterContext';

// rafce + tab
const Products = () => {

    const { counter } = useCounterContext();

    return (

        <div>

            <h1>About</h1>

            <p>Valor do contador: {counter}</p>
            
        </div>

    );

};

export default Products;