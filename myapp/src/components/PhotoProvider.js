import React, { useContext, useState, useEffect } from 'react';
import api from './API';

const PhotoContext = React.createContext()

export function usePhotos() {
    return useContext(PhotoContext)
}

export function PhotoProvider({children}) {
    const [photoData, setPhotoData] = useState()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchData(){
            let isMounted = true;  
            await api.get('/photos')
              .then ( response => {
               
                console.log('resp',response.data)
                const slice = response.data(0,3)
                setPhotoData(response.data)
        })}
        fetchData()
        setLoading(false)
    },[])
  
   return (
    <PhotoContext.Provider value={photoData}>
        {!loading && children}
    </PhotoContext.Provider>
);
}