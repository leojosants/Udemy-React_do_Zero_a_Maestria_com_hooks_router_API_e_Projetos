// CSS

// Hook
import { useContext } from 'react';

// Context
import { CounterContext } from '../../context/CounterContext/CounterContext';

// rafce + tab
const useCounterContext = () => {

    const context = useContext(CounterContext);

    if (!context) {
        
        console.log('Contexto não encontrato!');

    }
  
    return context;

};

export default useCounterContext;