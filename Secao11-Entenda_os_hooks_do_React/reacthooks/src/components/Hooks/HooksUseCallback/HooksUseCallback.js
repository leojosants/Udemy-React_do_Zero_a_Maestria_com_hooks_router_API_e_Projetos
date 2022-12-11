//
import { useCallback, useState } from "react";

import List from "../../ListComponent/List";


const HooksUseCallback = () => {

    const [counter, setCounter] = useState(0);

    
    const getItemsFromDatabase = useCallback(() => {
        
        return ['a', 'b', 'c'];
    
    }, []);


    return (

        <div>

            <h2>useCallback</h2>

            <List getItems={getItemsFromDatabase} />

            <button
                onClick={() => setCounter(counter + 1)}
            >
                Alterar
            </button>

            <p>O número é: {counter}</p>


            <hr />

        </div>

    );

};

export default HooksUseCallback;