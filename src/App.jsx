import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Saidbar from './Saidbar';
import UserDetail from './UserDetail';
import Users from './child/Users';
import Photos from './child/Photos';
import Post from './child/Post';
import Comments from './child/Comments';
import { SearchProvider } from './child/SearchContext';
import './stayle.css';

function App() {
    return (
        <Router>
            <SearchProvider>
                <Navbar />
                <div className='flex'>
                    <Saidbar className='fixed top-0' />
                    <Routes>
                        <Route path="/" element={<Users />} />
                        <Route path="/photos" element={<Photos />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/comments" element={<Comments />} />
                        <Route path="/user-detail/:id" element={<UserDetail />} />
                    </Routes>
                </div>
            </SearchProvider>
        </Router>
    );
}

export default App;
