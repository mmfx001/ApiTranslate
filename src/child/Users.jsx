import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSearch } from './SearchContext';

function Users() {
    const { t } = useTranslation();
    const { searchTerm } = useSearch();
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
            });
    }, []);

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredUsers(users);
        } else {
            const lowercasedSearchTerm = searchTerm.toLowerCase();
            setFilteredUsers(users.filter(user =>
                user.name.toLowerCase().includes(lowercasedSearchTerm) ||
                user.username.toLowerCase().includes(lowercasedSearchTerm) ||
                user.email.toLowerCase().includes(lowercasedSearchTerm)
            ));
        }
    }, [searchTerm, users]);

    return (
        <div className="users-container ml-[270px]">
            <h1 className="title">{t('user_list')}</h1>
            <ul className="users-list">
                {filteredUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <Link to={`/users/${user.id}`} className="user-link">
                            <div className="user-card">
                                <h2 className="user-name">{user.name}</h2>
                                <p><strong>{t('id')}:</strong> {user.id}</p>
                                <p><strong>{t('username')}:</strong> {user.username}</p>
                                <p><strong>{t('email')}:</strong> {user.email}</p>
                                <p><strong>{t('phone')}:</strong> {user.phone}</p>
                                <p><strong>{t('website')}:</strong> {user.website}</p>
                                <p><strong>{t('company')}:</strong> {user.company.name}</p>
                                <p><strong>{t('address')}:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
