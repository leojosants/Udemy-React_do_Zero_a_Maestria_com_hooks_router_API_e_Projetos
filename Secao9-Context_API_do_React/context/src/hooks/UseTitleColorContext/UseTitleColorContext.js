// Hooks
import { useContext } from "react";

// Context
import { TitleColorContext } from "../../context/TitleColorContext/TitleColorContext";

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext);

    if (!context) {
        
        console.log('Context não encontrado!');

    }

    return context;

};