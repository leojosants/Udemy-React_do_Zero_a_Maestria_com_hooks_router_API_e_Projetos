//
import { useLayoutEffect, useEffect, useState } from "react";


const HookUseLayoutEffect = () => {

    const [name, setName] = useState('Leonardo José');


    useEffect(() => {

        console.log('2');

        setName('Leonardo José de Oliveira');

    }, []);


    useLayoutEffect(() => {

        console.log('1');

        setName('Leonardo José de Oliveira Santos');

    }, []);

    console.log(name);


    return (

        <div>

            <h2>UseLayoutEffect</h2>

            <p>Nome: {name}</p>

            <hr />

        </div>

    );

};

export default HookUseLayoutEffect;