import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearch } from './child/SearchContext';

function Navbar() {
    const { t } = useTranslation(); 
    const { searchTerm, setSearchTerm } = useSearch();
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="Navbar flex items-center justify-between p-4 bg-gray-800">
            <input
                placeholder={t('search')}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
            <div className="flex space-x-2">
                <button 
                    onClick={() => changeLanguage('ru')} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                    Ru
                </button>
                <button 
                    onClick={() => changeLanguage('uz')} 
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                >
                    Uz
                </button>
                <button 
                    onClick={() => changeLanguage('en')} 
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                >
                    En
                </button>
            </div>
        </div>
    );
}

export default Navbar;
