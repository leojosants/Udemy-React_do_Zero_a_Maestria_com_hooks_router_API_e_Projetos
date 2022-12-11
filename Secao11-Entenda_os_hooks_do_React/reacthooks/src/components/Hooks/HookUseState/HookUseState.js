//
import { useState } from 'react';


const HookUseState = () => {

    // 1 - usestate
    let userName = 'Leonardo';

    const [name, setName] = useState();

    const changeNames = () => {
        userName = 'Leonardo Santos';

        setName('Mateus Battist');

        console.log(userName);
    }

    console.log(name);

    // 2 - useState e input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
        
    };

    
    return (

        <div>
            
            {/* // 1 - usestate */}
            <h2>useState</h2>

            <p>Variável: {userName }</p>

            <p>useState: {name}</p>
            
            <button
                onClick={changeNames}
            >
                Mudar nome
            </button>

            {/* 2 - useState e input */}
            <p>Digite a sua idade:</p>
           
            <form
                onSubmit={ handleSubmit}
            >
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    type="submit"
                    value="Enviar"
                />
            </form>

            <p>Você tem {age} anos</p>
            
            
            
            <hr />

            

        </div>

    )

}

export default HookUseState