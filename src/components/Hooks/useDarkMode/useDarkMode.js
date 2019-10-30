import React, { useEffect } from 'react'; 
import { useLocalStorage } from '../useLocalStorage/useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        value ? document.querySelector('body').classList.add('dark-mode') 
        : document.querySelector('body').classList.remove('dark-mode')
    }, [value])
    
    return [value, setValue]
}
    
