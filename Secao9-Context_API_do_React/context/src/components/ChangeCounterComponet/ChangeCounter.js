// 3 - Alterando contexto
import { useContext } from 'react';

// CSS
import './ChangeCounter.css';

// Context
import { CounterContext } from '../../context/CounterContext/CounterContext';

// rafce + tab
const ChangeCounter = () => {

    const { counter, setCounter } = useContext(CounterContext);

    return (
  
        <div>

            <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>

        </div>
  
    );

};

export default ChangeCounter;