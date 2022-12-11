// CSS
import './About.css';

// Hook custom
import useCounterContext from '../../hooks/useCounterContext/useCounterContext';
import { useTitleColorContext } from '../../hooks/UseTitleColorContext/UseTitleColorContext';

// rafce + tab
const About = () => {

    const { counter } = useCounterContext();

    // 5 - Context mais complexo
    const { color } = useTitleColorContext();

    return (

        <div>

            <h1 style={{ color: color }}>About</h1>

            <p>Valor do contador: {counter}</p>
            
        </div>

    );

};

export default About;