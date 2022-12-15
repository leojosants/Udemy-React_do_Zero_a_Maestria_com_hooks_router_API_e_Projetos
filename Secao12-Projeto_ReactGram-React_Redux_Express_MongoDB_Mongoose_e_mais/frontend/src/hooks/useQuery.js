
// Router 
import { useLocation } from 'react-router-dom';

// Hook
import { useMemo } from 'react';

// 
export function useQuery() {
    
    const {search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);

};