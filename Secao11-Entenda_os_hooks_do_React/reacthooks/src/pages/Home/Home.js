// 
import { useContext } from 'react';
import { SomeContext } from '../../components/Hooks/HookUseContext/HookUseContext';

import HookUseState from '../../components/Hooks/HookUseState/HookUseState';
import HookUseReducer from "../../components/Hooks/HookUseReducer/HookUseReducer";
import HookUseEffect from "../../components/Hooks/HookUseEffect/HookUseEffect";
import HookUseRef from '../../components/Hooks/HookUseRef/HookUseRef'
import HooksUseCallback from '../../components/Hooks/HooksUseCallback/HooksUseCallback';
import HookUseMemo from '../../components/Hooks/HookUseMemo/HookUseMemo';
import HookUseLayoutEffect from '../../components/Hooks/HookUseLayoutEffect/HookUseLayoutEffect';
import HookUseImperativeHandle from '../../components/Hooks/HookUseImperativeHandle/HookUseImperativeHandle';
import HookCustom from '../../components/HookCustomComponent/HookCustom';


const Home = () => {

    const { contextValue } = useContext(SomeContext);


    return (

        <div>
            
            {/* <HookUseState /> */}
            
            {/* <HookUseReducer /> */}
            
            {/* <HookUseEffect /> */}

            <h2>useContext</h2>
            
            <p>Valor do context: {contextValue}</p>
            
            <hr />

            {/* <HookUseRef /> */}
            
            {/* <HooksUseCallback /> */}

            {/* <HookUseMemo /> */}

            {/* <HookUseLayoutEffect /> */}

            {/* <HookUseImperativeHandle /> */}

            <HookCustom />
            
        </div>

    );

};

export default Home;