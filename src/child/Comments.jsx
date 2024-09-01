import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSearch } from './SearchContext'; // To'g'ri yo'lni tekshiring

function Comments() {
    const [comments, setComments] = useState(null); // Boshlang'ich qiymatni `null` qilib o'zgartirdik
    const { t } = useTranslation();
    const { searchTerm } = useSearch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(error => console.error("Xatolik yuz berdi:", error));
    }, []);

    if (comments === null) {
        return <p className="loading-text">Yuklanmoqda...</p>; // Ma'lumotlar yuklanayotganda bu yozuv ko'rsatiladi
    }

    const filteredComments = comments.filter(comment =>
        comment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        comment.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='comments-container ml-[270px]'>
            <h1 className='comments-title'>{t('comment_list')}</h1>
            <ul className='comments-list'>
                {filteredComments.length === 0 ? (
                    <p className="no-comments-text">Hech qanday izoh topilmadi.</p>
                ) : (
                    filteredComments.map(comment => (
                        <li key={comment.id} className='comment-item'>
                            <Link to={`/comments`} className='comment-link'>
                                <div className='comment-card'>
                                    <h2 className='comment-name'>{comment.name}</h2>
                                    <p><strong>{t('id')}:</strong> {comment.id}</p>
                                    <p><strong>{t('email')}:</strong> {comment.email}</p>
                                    <p><strong>{t('body')}:</strong> {comment.body}</p>
                                </div>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Comments;
