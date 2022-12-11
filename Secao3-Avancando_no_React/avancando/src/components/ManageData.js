// 
import { useState } from 'react';

const ManageData = () => {

    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(15);

    return (
    <div>
        <p>Valor: {someData}</p>

        <button onClick={() => (someData = 15)}>Mudar variável</button>
        
        <p>Valor: {number}</p>

        <button onClick={() => setNumber(25)}>Mudar o state</button>
    
    </div>
  );
};

export default ManageData