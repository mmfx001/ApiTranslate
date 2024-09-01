import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSearch } from './SearchContext'; 

function Photos() {
    const [photos, setPhotos] = useState([]);
    const { t } = useTranslation();
    const { searchTerm } = useSearch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then(response => response.json())
            .then(data => setPhotos(data));
    }, []);
    
    const filteredPhotos = photos.filter(photo =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='photos-container ml-[270px]'> 
            <h1 className='photos-title'>{t('photo_list')}</h1>
            <ul className='photos-list'>
                {filteredPhotos.map(photo => (
                    <li key={photo.id} className='photo-item'>
                        <Link to={`/photos/${photo.id}`} className='photo-link'>
                            <div className='photo-card'>
                                <h2 className='photo-title'>{photo.title}</h2>
                                <p><strong>{t('id')}:</strong> {photo.id}</p>
                                <p><strong>{t('url')}:</strong> {photo.url}</p>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Photos;
