import React from 'react';
import { usePhotos } from './PhotoProvider';

export function PhotoList() {
    const photos = usePhotos()
    console.log('newphoto',photos)

    return (
        <div>
        {photos.map(function(item, i){
            console.log('item',item);
         return <li key={i}>Test</li>
})}
        </div>
    )
}