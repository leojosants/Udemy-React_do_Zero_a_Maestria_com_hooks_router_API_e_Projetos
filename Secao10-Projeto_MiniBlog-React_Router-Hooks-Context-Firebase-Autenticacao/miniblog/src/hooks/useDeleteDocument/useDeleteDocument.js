// Hooks
import { useState, useEffect, useReducer } from 'react';

// Firebase
import { db } from '../../firebase/config';

// Firebase store
import { doc, deleteDoc } from 'firebase/firestore';


const inicialStage = {
    loading: null,
    error: null
};


const deleteReducer = (state, action) => {

    switch (action.type) {
        
        case 'LOADING':
            return { loading: true, error: null };
        
        case 'DELETE_DOC':    
            return { loading: false, error: null };
        
        case 'ERROR':    
            return { loading: false, error: action.payload };
    
        default:
            return state;
    };

};


export const useDeleteDocument = (docCollection) => {

    const [response, dispatch] = useReducer(deleteReducer, inicialStage);

    // Deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {

        if (!cancelled) {
            dispatch(action);
        }

    };


    const deleteDocument = async (id) => {

        checkCancelBeforeDispatch({
            type: 'LOADING',
        });

        
        try {
            const deleteDocument = await deleteDoc(doc(db, docCollection, id));

            checkCancelBeforeDispatch({
                type: 'DELETE_DOC',
                payload: deleteDocument,
            });

        } catch (error) {

            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload: error.message,
            });
            
        }

    };  


    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { deleteDocument, response };

};