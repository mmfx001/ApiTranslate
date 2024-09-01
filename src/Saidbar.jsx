import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // useTranslation hook'ini import qilish

function Saidbar() {
    const { t } = useTranslation(); 
  
    return (
        <div className='Saidbar  flex  bg-gray-600 '>
            <ul className='flex flex-col p-6 w-64 gap-6' tabindex="0"  >
                <li tabIndex="0" className='text-2xl font-medium text-white'><Link to="/users">{t('users')}</Link></li> {/* Tarjima qilish */}
                <li tabIndex="0" className='text-2xl font-medium text-white' ><Link to="/photos">{t('photos')}</Link></li> {/* Tarjima qilish */}
                <li tabIndex="0" className='text-2xl font-medium text-white'><Link to="/post">{t('posts')}</Link></li> {/* Tarjima qilish */}
                <li tabIndex="0" className='text-2xl font-medium text-white'><Link to="/comments">{t('comments')}</Link></li> {/* Tarjima qilish */}
            </ul>
        </div>
    );
}

export default Saidbar;
