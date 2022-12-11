// CSS
import "./Home.css";

// Components
import ChangeCounter from "../../components/ChangeCounterComponet/ChangeCounter";

// 4 - Refatorando com Hook
import useCounterContext from "../../hooks/useCounterContext/useCounterContext";

// 5 - Context mais complexo
import { useTitleColorContext } from "../../hooks/UseTitleColorContext/UseTitleColorContext";

// rafce + tab
const Home = () => {
    
    const { counter } = useCounterContext();
    
    // 5 - Context mais complexo
    const { color, dispatch } = useTitleColorContext();

    // 6 - Alterando contexto complexo
    const setTitleColor = (color) => {

        dispatch({ type: color });
        
    };

    return (

        <div>

            <h1 style={{color: color}}>Home</h1>

            <p>Valor do contador: {counter}</p>

            {/* 3 - Alterando valor contexto */}
            <ChangeCounter />

            {/* 6 - Alterando contexto complexo */}
            <div>

                <button onClick={() => setTitleColor('RED')}>Vermelho</button>

                <button onClick={() => setTitleColor('BLUE')}>Azul</button>

            </div>

        </div>
    );
};

export default Home;