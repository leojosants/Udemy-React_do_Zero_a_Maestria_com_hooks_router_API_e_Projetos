// 
import { useEffect, useRef, useDebugValue } from 'react'


export const usePrevious = (value) => {

    const ref = useRef();

    useDebugValue('-x-x- CUSTOM HOOK E USEDEBUGVALUE -x-x-');
    useDebugValue('O número enterior é: ' + value);


    useEffect(() => {

        ref.current = value;
    
    });

  
    return ref.current;

};