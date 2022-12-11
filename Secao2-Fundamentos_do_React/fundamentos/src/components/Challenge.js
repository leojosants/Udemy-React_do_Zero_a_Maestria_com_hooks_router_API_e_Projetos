// 

const Challenge = () => {

    const val1 = 1;
    const val2 = 2;

    return(
        <div>
            <p>Imprimindo valores no componente: { val1 } e { val2 }</p>
            <button onClick={() => console.log(val1 + val2)}>Clique aqui para ver o resultado da soma de ({val1} + {val2})</button>
        </div>
    );
};

export default Challenge;