import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initValue) {

    const [item, setItem] = useState(initValue);
    const [loading, setLoading ] = useState(true);
    const [error, setError ] = useState(false);



    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
        
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initValue));
                    parsedItem = initValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                }
        
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(true);
            }
        }, 2000)
    }, []);




    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    };

    console.log(item)

    return {
        item,
        saveItem, 
        loading, 
        error
    };
}

export {useLocalStorage}