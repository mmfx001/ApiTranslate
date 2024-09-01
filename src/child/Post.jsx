import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSearch } from './SearchContext'; 

function Post() {
    const [posts, setPosts] = useState([]);
    const { t } = useTranslation();
    const { searchTerm } = useSearch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);
    
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='posts-container ml-[270px]'> 
            <h1 className='posts-title'>{t('post_list')}</h1>
            <ul className='posts-list'>
                {filteredPosts.map(post => (
                    <li key={post.id} className='post-item'>
                        <Link to={`/posts/${post.id}`} className='post-link'>
                            <div className='post-card'>
                                <h2 className='post-title'>{post.title}</h2>
                                <p><strong>{t('id')}:</strong> {post.id}</p>
                                <p><strong>{t('body')}:</strong> {post.body}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Post;
