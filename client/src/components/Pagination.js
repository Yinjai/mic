import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../functional/ScrollToTop';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='pagination'>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link to={{ pathname: `/episodes/page/${number}` }} onClick={() => paginate(number)} className='button alt'>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;